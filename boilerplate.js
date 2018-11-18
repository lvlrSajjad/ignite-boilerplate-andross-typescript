const options = require('./options')
const { merge, pipe, assoc, omit, __ } = require('ramda')
const { getReactNativeVersion } = require('./lib/react-native-version')
const patterns = require('./lib/patterns')
/**
 * Is Android installed?
 *
 * $ANDROID_HOME/tools folder has to exist.
 *
 * @param {*} context - The gluegun context.
 * @returns {boolean}
 */
const isAndroidInstalled = function (context) {
  const androidHome = process.env['ANDROID_HOME']
  const hasAndroidEnv = !context.strings.isBlank(androidHome)
  const hasAndroid = hasAndroidEnv && context.filesystem.exists(`${androidHome}/tools`) === 'dir'

  return Boolean(hasAndroid)
}

/**
 * Let's install.
 *
 * @param {any} context - The gluegun context.
 */
async function install (context) {
  const {
    filesystem,
    parameters,
    ignite,
    reactNative,
    print,
    system,
    prompt,
    template
  } = context
  const { colors } = print
  const { red, yellow, bold, gray, blue } = colors

  const perfStart = (new Date()).getTime()

  const name = parameters.third
  const spinner = print
    .spin(`using the ${blue('Andross Typescript')} ignite boilerplate`)
    .succeed()

  // attempt to install React Native or die trying
  const rnInstall = await reactNative.install({
    name,
    version: getReactNativeVersion(context)
  })
  if (rnInstall.exitCode > 0) process.exit(rnInstall.exitCode)

  // remove the __tests__ directory and App.js that come with React Native
  filesystem.remove('__tests__')
  filesystem.remove('App.js')

  // copy our App, Tests & storybook directories
  spinner.text = '▸ copying files'
  spinner.start()
  filesystem.copy(`${__dirname}/boilerplate/js/App`, `${process.cwd()}/js/App`, {
    overwrite: true,
    matching: '!*.ejs'
  })
  filesystem.copy(`${__dirname}/boilerplate/js/Tests`, `${process.cwd()}/js/Tests`, {
    overwrite: true,
    matching: '!*.ejs'
  })

  spinner.stop()

  // --max, --min, interactive
  let answers
  if (parameters.options.max) {
    answers = options.answers.max
  } else if (parameters.options.min) {
    answers = options.answers.min
  } else {
    answers = await prompt.ask(options.questions)
  }

  // generate some templates
  spinner.text = '▸ generating files'

  const templates = [
    { template: 'index.js.ejs', target: 'index.js' },
    { template: 'README.md', target: 'README.md' },
    { template: 'ignite.json.ejs', target: 'ignite/ignite.json' },
    { template: '.editorconfig', target: '.editorconfig' },
    { template: '.babelrc', target: '.babelrc' },
    { template: '.env.example', target: '.env.example' },
    { template: 'rn-cli.config.js', target: 'rn-cli.config.js' },
    { template: 'tsconfig.json', target: 'tsconfig.json' },
    { template: 'jsconfig.json', target: 'jsconfig.json' },
    { template: 'tslint.json', target: 'tslint.json' },
    { template: 'typings.d.ts', target: 'typings.d.ts' }
  ]
  const templateProps = {
    name,
    igniteVersion: ignite.version,
    reactNativeVersion: rnInstall.version,
  }
  await ignite.copyBatch(context, templates, templateProps, {
    quiet: true,
    directory: `${ignite.ignitePluginPath()}/boilerplate`
  })

  /**
   * Append to files
   */
  // https://github.com/facebook/react-native/issues/12724
  filesystem.appendAsync('.gitattributes', '*.bat text eol=crlf')
  filesystem.append('.gitignore', '\n# Misc\n#')
  filesystem.append('.gitignore', '\n.env\n')

  /**
   * Merge the package.json from our template into the one provided from react-native init.
   */
  async function mergePackageJsons () {
    // transform our package.json in case we need to replace variables
    const rawJson = await template.generate({
      directory: `${ignite.ignitePluginPath()}/boilerplate`,
      template: 'package.json.ejs',
      props: templateProps
    })
    const newPackageJson = JSON.parse(rawJson)

    // read in the react-native created package.json
    const currentPackage = filesystem.read('package.json', 'json')

    // deep merge, lol
    const newPackage = pipe(
      assoc(
        'dependencies',
        merge(currentPackage.dependencies, newPackageJson.dependencies)
      ),
      assoc(
        'devDependencies',
        merge(currentPackage.devDependencies, newPackageJson.devDependencies)
      ),
      assoc('scripts', merge(currentPackage.scripts, newPackageJson.scripts)),
      merge(
        __,
        omit(['dependencies', 'devDependencies', 'scripts'], newPackageJson)
      )
    )(currentPackage)

    // write this out
    filesystem.write('package.json', newPackage, { jsonIndent: 2 })
  }
  await mergePackageJsons()

  spinner.stop()

  // react native link -- must use spawn & stdio: ignore or it hangs!! :(
  spinner.text = `▸ linking native libraries`
  spinner.start()
  await system.spawn('react-native link', { stdio: 'ignore' })
  spinner.stop()

  // pass long the debug flag if we're running in that mode
  const debugFlag = parameters.options.debug ? '--debug' : ''

  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  // NOTE(steve): I'm re-adding this here because boilerplates now hold permanent files
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  try {
    // boilerplate adds itself to get plugin.js/generators etc
    // Could be directory, npm@version, or just npm name.  Default to passed in values
    const boilerplate = parameters.options.b || parameters.options.boilerplate || 'ignite-ir-boilerplate-andross'

    await system.spawn(`ignite add ${boilerplate} ${debugFlag}`, { stdio: 'inherit' })

    // now run install of Ignite Plugins
    switch ((answers['login-screen'])) {
      case 'No Login Screen':{
        break;
      }
      case 'Simple Login Screen':{
        spinner.text = '▸ copying files'
        spinner.start()

        filesystem.copy(`${__dirname}/templates/login`, `${process.cwd()}/js/App`, {
          overwrite: true
        })
        spinner.stop()

        break;
      }
      case 'Sms Login Screen':{
        spinner.text = '▸ copying files'
        spinner.start()

        filesystem.copy(`${__dirname}/templates/smslogin`, `${process.cwd()}/js/App`, {
          overwrite: true
        })
        spinner.stop()

        break;
      }
    }
    switch ((answers['main-screen'])) {
      case 'Simple Screen':{
        break;
      }
      case 'Collapsible Toolbar Screen':{
        const props = { name:'LaunchScreen' }
        const jobs = [
          {
            template: 'collapsible/Components/index.ejs',
            target: `js/App/Components/LaunchScreen/index.ts`
          },
          {
            template: 'collapsible/Components/Component.ejs',
            target: `js/App/Components/LaunchScreen/LaunchScreenComponent.tsx`
          },
          {
            template: 'collapsible/Components/MainContent.ejs',
            target: `js/App/Components/LaunchScreen/LaunchScreenMainContent.tsx`
          },
          {
            template: 'collapsible/Components/ToolbarContent.ejs',
            target: `js/App/Components/LaunchScreen/LaunchScreenToolbarContent.tsx`
          },
          {
            template: 'collapsible/Containers/LaunchScreen.ejs',
            target: `js/App/Containers/LaunchScreen.ts`
          }
        ]
        await ignite.copyBatch(context, jobs, props)
        break;
      }
      case 'Material Backdrop Screen':{
        const props = { name:'LaunchScreen' }
        const jobs = [
          {
            template: 'backdrop/Components/index.ejs',
            target: `js/App/Components/LaunchScreen/index.ts`
          },
          {
            template: 'backdrop/Components/Component.ejs',
            target: `js/App/Components/LaunchScreen/LaunchScreenComponent.tsx`
          },
          {
            template: 'backdrop/Components/Backdrop.ejs',
            target: `js/App/Components/LaunchScreen/LaunchScreenBackLayerContent.tsx`
          },
          {
            template: 'backdrop/Components/Content.ejs',
            target: `js/App/Components/LaunchScreen/LaunchScreenFrontLayerContent.tsx`
          },
          {
            template: 'backdrop/Containers/LaunchScreen.ejs',
            target: `js/App/Containers/Containers/LaunchScreen.ts`
          }
        ]
        await ignite.copyBatch(context, jobs, props)
        break;
      }
      case 'Collapsible Toolbar Screens With Drawer Navigation':{
        spinner.text = '▸ copying files'
        spinner.start()

        filesystem.copy(`${__dirname}/templates/collapsibledrawer/Components/MainTabs`, `${process.cwd()}/js/App/Components/LaunchScreenTabs`, {
          overwrite: true
        })
        filesystem.copy(`${__dirname}/templates/collapsibledrawer/Components/LaunchScreen`, `${process.cwd()}/js/App/Components/LaunchScreen`, {
          overwrite: true
        })
        spinner.stop()
        const props = { name:'LaunchScreen' }
        const jobs = [
          {
            template: 'collapsibledrawer/Components/LaunchScreenComponent.ejs',
            target: `js/App/Components/LaunchScreen/LaunchScreenComponent.tsx`
          },
          {
            template: 'collapsibledrawer/Containers/LaunchScreen.ejs',
            target: `js/App/Containers/LaunchScreen.ts`
          },
          {
            template: 'collapsibledrawer/Containers/MainTabs/FifthTab.ejs',
            target: `js/App/Containers/LaunchScreenTabs/FifthTab.ts`
          },
          {
            template: 'collapsibledrawer/Containers/MainTabs/FirstTab.ejs',
            target: `js/App/Containers/LaunchScreenTabs/FirstTab.ts`
          },
          {
            template: 'collapsibledrawer/Containers/MainTabs/FourthTab.ejs',
            target: `js/App/Containers/LaunchScreenTabs/FourthTab.ts`
          },
          {
            template: 'collapsibledrawer/Containers/MainTabs/SecondTab.ejs',
            target: `js/App/Containers/LaunchScreenTabs/SecondTab.ts`
          },
          {
            template: 'collapsibledrawer/Containers/MainTabs/ThirdTab.ejs',
            target: `js/App/Containers/LaunchScreenTabs/ThirdTab.ts`
          }
        ]
        await ignite.copyBatch(context, jobs, props)
        break;
      }
      case 'Bottom Tabbed Screen':{
        spinner.text = '▸ copying files'
        spinner.start()

        filesystem.copy(`${__dirname}/templates/tabbed/Components/ExampleComponent`, `${process.cwd()}/js/App/Components/ExampleComponent`, {
          overwrite: true
        })
        filesystem.copy(`${__dirname}/templates/tabbed/Components/LaunchScreen`, `${process.cwd()}/js/App/Components/LaunchScreen`, {
          overwrite: true
        })
        filesystem.copy(`${__dirname}/templates/tabbed/Components/MainTabs`, `${process.cwd()}/js/App/Components/LaunchScreenTabs`, {
          overwrite: true
        })
        spinner.stop()
        const props = { name:'LaunchScreen' }
        const jobs = [
          {
            template: 'tabbed/Components/LaunchScreenComponent.ejs',
            target: `js/App/Components/LaunchScreen/LaunchScreenComponent.tsx`
          },
          {
            template: 'tabbed/Containers/LaunchScreen.ejs',
            target: `js/App/Containers/LaunchScreen.ts`
          },
          {
            template: 'tabbed/Containers/MainTabs/FifthTab.ejs',
            target: `js/App/Containers/LaunchScreenTabs/FifthTab.ts`
          },
          {
            template: 'tabbed/Containers/MainTabs/FirstTab.ejs',
            target: `js/App/Containers/LaunchScreenTabs/FirstTab.ts`
          },
          {
            template: 'tabbed/Containers/MainTabs/FourthTab.ejs',
            target: `js/App/Containers/LaunchScreenTabs/FourthTab.ts`
          },
          {
            template: 'tabbed/Containers/MainTabs/SecondTab.ejs',
            target: `js/App/Containers/LaunchScreenTabs/SecondTab.ts`
          },
          {
            template: 'tabbed/Containers/MainTabs/ThirdTab.ejs',
            target: `js/App/Containers/LaunchScreenTabs/ThirdTab.ts`
          }
        ]
        await ignite.copyBatch(context, jobs, props)
        break;
      }
      case 'Top Tabbed Screen':{
        spinner.text = '▸ copying files'
        spinner.start()

        filesystem.copy(`${__dirname}/templates/toptabbed/Components/LaunchScreen`, `${process.cwd()}/js/App/Components/LaunchScreen`, {
          overwrite: true
        })
        filesystem.copy(`${__dirname}/templates/toptabbed/Components/MainTabs`, `${process.cwd()}/js/App/Components/LaunchScreenTabs`, {
          overwrite: true
        })
        spinner.stop()
        const props = { name:'LaunchScreen' }
        const jobs = [
          {
            template: 'toptabbed/Components/ttlaunchscreenComponent.ejs',
            target: `js/App/Components/LaunchScreen/LaunchScreenComponent.tsx`
          },
          {
            template: 'toptabbed/Containers/ttlaunchscreen.ejs',
            target: `js/App/Containers/LaunchScreen.ts`
          },
          {
            template: 'toptabbed/Containers/MainTabs/CallsScreen.ejs',
            target: `js/App/Containers/LaunchScreenTabs/CallsScreen.ts`
          },
          {
            template: 'toptabbed/Containers/MainTabs/ChatsScreen.ejs',
            target: `js/App/Containers/LaunchScreenTabs/ChatsScreen.ts`
          },
          {
            template: 'toptabbed/Containers/MainTabs/GroupsScreen.ejs',
            target: `js/App/Containers/LaunchScreenTabs/GroupsScreen.ts`
          }
        ]
        await ignite.copyBatch(context, jobs, props)

        break;
      }
      case 'Navigation Drawer Screen':{
        spinner.text = '▸ copying files'
        spinner.start()

        filesystem.copy(`${__dirname}/templates/drawer/Components/ExampleComponent`, `${process.cwd()}/js/App/Components/ExampleComponent`, {
          overwrite: true
        })
        filesystem.copy(`${__dirname}/templates/drawer/Components/LaunchScreen`, `${process.cwd()}/js/App/Components/LaunchScreen`, {
          overwrite: true
        })
        filesystem.copy(`${__dirname}/templates/drawer/Components/MainTabs`, `${process.cwd()}/js/App/Components/LaunchScreenTabs`, {
          overwrite: true
        })
        filesystem.copy(`${__dirname}/templates/drawer/Components/NavHeaders`, `${process.cwd()}/js/App/Components/NavHeaders`, {
          overwrite: true
        })
        spinner.stop()
        const props = { name:'LaunchScreen' }
        const jobs = [
          {
            template: 'drawer/Components/LaunchScreenComponent.ejs',
            target: `js/App/Components/LaunchScreen/LaunchScreenComponent.tsx`
          },
          {
            template: 'drawer/Containers/LaunchScreen.ejs',
            target: `js/App/Containers/LaunchScreen.ts`
          },
          {
            template: 'drawer/Containers/MainTabs/FifthTab.ejs',
            target: `js/App/Containers/LaunchScreenTabs/FifthTab.ts`
          },
          {
            template: 'drawer/Containers/MainTabs/FirstTab.ejs',
            target: `js/App/Containers/LaunchScreenTabs/FirstTab.ts`
          },
          {
            template: 'drawer/Containers/MainTabs/FourthTab.ejs',
            target: `js/App/Containers/LaunchScreenTabs/FourthTab.ts`
          },
          {
            template: 'drawer/Containers/MainTabs/SecondTab.ejs',
            target: `js/App/Containers/LaunchScreenTabs/SecondTab.ts`
          },
          {
            template: 'drawer/Containers/MainTabs/ThirdTab.ejs',
            target: `js/App/Containers/LaunchScreenTabs/ThirdTab.ts`
          }
        ]
        await ignite.copyBatch(context, jobs, props)
        break;
      }
      case 'Social Media Screen':{
        spinner.text = '▸ copying files'
        spinner.start()

        filesystem.copy(`${__dirname}/templates/socialmedia`, `${process.cwd()}/js/App`, {
          overwrite: true
        })
        spinner.stop()
          const appNavFilePath = `${process.cwd()}/js/App/Navigation/AppNavigation.tsx`
          const importToAdd = `import ChatScreen from '../Containers/ChatScreen'`
          const routeToAdd = `  ChatScreen: { screen: ChatScreen },`

          if (!filesystem.exists(appNavFilePath)) {
            const msg = `No '${appNavFilePath}' file found.  Can't insert container.`
            print.error(msg)
            process.exit(1)
          }

          // insert container import
          ignite.patchInFile(appNavFilePath, {
            after: patterns[patterns.constants.PATTERN_IMPORTS],
            insert: importToAdd
          })

          // insert container route
          ignite.patchInFile(appNavFilePath, {
            after: patterns[patterns.constants.PATTERN_ROUTES],
            insert: routeToAdd
          })
        break;
      }
    }
  } catch (e) {
    ignite.log(e)
    throw e
  }

  // git configuration
  const gitExists = await filesystem.exists('./.git')
  if (!gitExists && !parameters.options['skip-git'] && system.which('git')) {
    // initial git
    const spinner = print.spin('configuring git')

    // TODO: Make husky hooks optional
    const huskyCmd = '' // `&& node node_modules/husky/bin/install .`
    system.run(`git init . && git add . && git commit -m "Initial commit." ${huskyCmd}`)

    spinner.succeed(`configured git`)
  }

  const perfDuration = parseInt(((new Date()).getTime() - perfStart) / 10) / 100
  spinner.succeed(`ignited ${yellow(name)} in ${perfDuration}s`)

  const androidInfo = isAndroidInstalled(context) ? ''
    : `\n\nTo run in Android, make sure you've followed the latest react-native setup instructions at https://facebook.github.io/react-native/docs/getting-started.html before using ignite.\nYou won't be able to run ${bold('react-native run-android')} successfully until you have.`

  const successMessage = `
    ${red('Ignite CLI')} ignited ${yellow(name)} in ${gray(`${perfDuration}s`)}

    To get started:

      cd ${name}
      react-native run-ios
      react-native run-android${androidInfo}
      ignite --help

    ${gray('Read the walkthrough at https://github.com/infinitered/ignite-ir-boilerplate-andross/blob/master/readme.md#boilerplate-walkthrough')}

    ${blue('Need additional help? Join our Slack community at http://community.infinite.red.')}

    ${bold('Now get cooking! 🍽')}
  `

  print.info(successMessage)
}

module.exports = {
  install
}
