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
  let answers = {}

  if (parameters.options.min) {
    answers = {...answers, ...options.answers.min }
  }else {
    let noLoginFlag;

    if (parameters.options.nologin) {
      answers = {...answers, ...options.answers.nologin }
    } else if (parameters.options.simplelogin) {
      answers = {...answers, ...options.answers.simplelogin }
    } else if (parameters.options.smslogin) {
      answers = {...answers, ...options.answers.smslogin }
    } else {
      noLoginFlag= true;
    }
    let noMainFlag;
    if (parameters.options.simple) {
      answers = {...answers, ...options.answers.simple }
    } else if (parameters.options.collapsible) {
      answers = {...answers, ...options.answers.collapsible }
    } else if (parameters.options.backdrop) {
      answers = {...answers, ...options.answers.backdrop }
    } else if (parameters.options.bottom) {
      answers = {...answers, ...options.answers.bottom }
    } else if (parameters.options.top) {
      answers = {...answers, ...options.answers.top }
    } else if (parameters.options.drawer) {
      answers = {...answers, ...options.answers.drawer }
    } else if (parameters.options.cdrawer) {
      answers = {...answers, ...options.answers.cdrawer }
    } else if (parameters.options.smedia) {
      answers = {...answers, ...options.answers.smedia }
    } else {
      noMainFlag = true;
    }

    if (noLoginFlag === true && noMainFlag === true) {
      await prompt.ask(options.questions)
    }
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

    ignite.patchInFile(`${process.cwd()}/android/app/src/main/java/com/${name.toLowerCase()}/MainActivity.java`, {
      after: 'import com.facebook.react.ReactActivity;',
      insert: `
      import com.facebook.react.ReactActivityDelegate;
      import com.facebook.react.ReactRootView;
      import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;`
    })

    ignite.patchInFile(`${process.cwd()}/android/app/src/main/java/com/${name.toLowerCase()}/MainActivity.java`, {
      after: `public class MainActivity extends ReactActivity {`,
      insert: '\n  @Override\n' +
      '  protected ReactActivityDelegate createReactActivityDelegate() {\n' +
      '    return new ReactActivityDelegate(this, getMainComponentName()) {\n' +
      '      @Override\n' +
      '      protected ReactRootView createRootView() {\n' +
      '       return new RNGestureHandlerEnabledRootView(MainActivity.this);\n' +
      '      }\n' +
      '    };\n' +
      '  }'
    })

    // now run install of Ignite Plugins
    switch ((answers['login-screen'])) {
      case 'No Login Screen':{
        break;
      }
      case 'Simple Login Screen':{
        spinner.text = '▸ copying files'
        spinner.start()

        filesystem.copy(`${__dirname}/templates/login/App`, `${process.cwd()}/js/App`, {
          overwrite: true
        })
        filesystem.copy(`${__dirname}/templates/login/Tests`, `${process.cwd()}/js/Tests`, {
          overwrite: true
        })
        spinner.stop()

        break;
      }
      case 'Sms Login Screen':{
        spinner.text = '▸ copying files'
        spinner.start()

        filesystem.copy(`${__dirname}/templates/smslogin/App`, `${process.cwd()}/js/App`, {
          overwrite: true
        })
        filesystem.copy(`${__dirname}/templates/smslogin/Tests`, `${process.cwd()}/js/Tests`, {
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
            template: 'collapsible/Tests/Components/Test.test.ejs',
            target: `js/Tests/Components/LaunchScreen/LaunchScreen.test.tsx`
          },
          {
            template: 'collapsible/App/Components/index.ejs',
            target: `js/App/Components/LaunchScreen/index.ts`
          },
          {
            template: 'collapsible/App/Components/Component.ejs',
            target: `js/App/Components/LaunchScreen/LaunchScreenComponent.tsx`
          },
          {
            template: 'collapsible/App/Components/MainContent.ejs',
            target: `js/App/Components/LaunchScreen/LaunchScreenMainContent.tsx`
          },
          {
            template: 'collapsible/App/Components/ToolbarContent.ejs',
            target: `js/App/Components/LaunchScreen/LaunchScreenToolbarContent.tsx`
          },
          {
            template: 'collapsible/App/Containers/LaunchScreen.ejs',
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
            template: 'backdrop/Tests/Components/Test.test.ejs',
            target: `js/Tests/Components/LaunchScreen/LaunchScreen.test.tsx`
          },
          {
            template: 'backdrop/App/Components/index.ejs',
            target: `js/App/Components/LaunchScreen/index.ts`
          },
          {
            template: 'backdrop/App/Components/Component.ejs',
            target: `js/App/Components/LaunchScreen/LaunchScreenComponent.tsx`
          },
          {
            template: 'backdrop/App/Components/Backdrop.ejs',
            target: `js/App/Components/LaunchScreen/LaunchScreenBackLayerContent.tsx`
          },
          {
            template: 'backdrop/App/Components/Content.ejs',
            target: `js/App/Components/LaunchScreen/LaunchScreenFrontLayerContent.tsx`
          },
          {
            template: 'backdrop/App/Containers/LaunchScreen.ejs',
            target: `js/App/Containers/Containers/LaunchScreen.ts`
          }
        ]
        await ignite.copyBatch(context, jobs, props)
        break;
      }
      case 'Collapsible Toolbar Screens With Drawer Navigation':{
        spinner.text = '▸ copying files'
        spinner.start()

        filesystem.copy(`${__dirname}/templates/collapsibledrawer/App/Components/MainTabs`, `${process.cwd()}/js/App/Components/LaunchScreenTabs`, {
          overwrite: true
        })
        filesystem.copy(`${__dirname}/templates/collapsibledrawer/App/Components/LaunchScreen`, `${process.cwd()}/js/App/Components/LaunchScreen`, {
          overwrite: true
        })

        filesystem.copy(`${__dirname}/templates/collapsibledrawer/Tests/Components/LaunchScreen`, `${process.cwd()}/js/Tests/Components/LaunchScreen`, {
          overwrite: true
        })

        spinner.stop()
        const props = { name:'LaunchScreen' }
        const jobs = [
          {
            template: 'collapsibledrawer/Tests/Components/MainTabs/FifthTab.test.ejs',
            target: `js/Tests/Components/LaunchScreenTabs/FifthTab.test.tsx`
          },
          {
            template: 'collapsibledrawer/Tests/Components/MainTabs/FirstTab.test.ejs',
            target: `js/Tests/Components/LaunchScreenTabs/FirstTab.test.tsx`
          },
          {
            template: 'collapsibledrawer/Tests/Components/MainTabs/FourthTab.test.ejs',
            target: `js/Tests/Components/LaunchScreenTabs/FourthTab.test.tsx`
          },
          {
            template: 'collapsibledrawer/Tests/Components/MainTabs/SecondTab.test.ejs',
            target: `js/Tests/Components/LaunchScreenTabs/SecondTab.test.tsx`
          },
          {
            template: 'collapsibledrawer/Tests/Components/MainTabs/ThirdTab.test.ejs',
            target: `js/Tests/Components/LaunchScreenTabs/ThirdTab.test.tsx`
          },

          {
            template: 'collapsibledrawer/App/Components/LaunchScreenComponent.ejs',
            target: `js/App/Components/LaunchScreen/LaunchScreenComponent.tsx`
          },
          {
            template: 'collapsibledrawer/App/Containers/LaunchScreen.ejs',
            target: `js/App/Containers/LaunchScreen.ts`
          },
          {
            template: 'collapsibledrawer/App/Containers/MainTabs/FifthTab.ejs',
            target: `js/App/Containers/LaunchScreenTabs/FifthTab.ts`
          },
          {
            template: 'collapsibledrawer/App/Containers/MainTabs/FirstTab.ejs',
            target: `js/App/Containers/LaunchScreenTabs/FirstTab.ts`
          },
          {
            template: 'collapsibledrawer/App/Containers/MainTabs/FourthTab.ejs',
            target: `js/App/Containers/LaunchScreenTabs/FourthTab.ts`
          },
          {
            template: 'collapsibledrawer/App/Containers/MainTabs/SecondTab.ejs',
            target: `js/App/Containers/LaunchScreenTabs/SecondTab.ts`
          },
          {
            template: 'collapsibledrawer/App/Containers/MainTabs/ThirdTab.ejs',
            target: `js/App/Containers/LaunchScreenTabs/ThirdTab.ts`
          }
        ]
        await ignite.copyBatch(context, jobs, props)
        break;
      }
      case 'Bottom Tabbed Screen':{
        spinner.text = '▸ copying files'
        spinner.start()

        filesystem.copy(`${__dirname}/templates/tabbed/App/Components/ExampleComponent`, `${process.cwd()}/js/App/Components/ExampleComponent`, {
          overwrite: true
        })
        filesystem.copy(`${__dirname}/templates/tabbed/App/Components/LaunchScreen`, `${process.cwd()}/js/App/Components/LaunchScreen`, {
          overwrite: true
        })
        filesystem.copy(`${__dirname}/templates/tabbed/App/Components/MainTabs`, `${process.cwd()}/js/App/Components/LaunchScreenTabs`, {
          overwrite: true
        })

        filesystem.copy(`${__dirname}/templates/tabbed/Tests/Components/ExampleComponent`, `${process.cwd()}/js/Tests/Components/ExampleComponent`, {
          overwrite: true
        })
        filesystem.copy(`${__dirname}/templates/tabbed/Tests/Components/LaunchScreen`, `${process.cwd()}/js/Tests/Components/LaunchScreen`, {
          overwrite: true
        })

        spinner.stop()
        const props = { name:'LaunchScreen' }
        const jobs = [
          {
            template: 'tabbed/Tests/Components/MainTabs/FifthTabComponent.test.ejs',
            target: `js/Tests/Components/LaunchScreen/FifthTabComponent.test.tsx`
          },
          {
            template: 'tabbed/Tests/Components/MainTabs/FirstTabComponent.test.ejs',
            target: `js/Tests/Components/LaunchScreen/FirstTabComponent.test.tsx`
          },
          {
            template: 'tabbed/Tests/Components/MainTabs/FourthTabComponent.test.ejs',
            target: `js/Tests/Components/LaunchScreen/FourthTabComponent.test.tsx`
          },
          {
            template: 'tabbed/Tests/Components/MainTabs/SecondTabComponent.test.ejs',
            target: `js/Tests/Components/LaunchScreen/SecondTabComponent.test.tsx`
          },
          {
            template: 'tabbed/Tests/Components/MainTabs/ThirdTabComponent.test.ejs',
            target: `js/Tests/Components/LaunchScreen/ThirdTabComponent.test.tsx`
          },

          {
            template: 'tabbed/App/Components/LaunchScreenComponent.ejs',
            target: `js/App/Components/LaunchScreen/LaunchScreenComponent.tsx`
          },
          {
            template: 'tabbed/App/Containers/LaunchScreen.ejs',
            target: `js/App/Containers/LaunchScreen.ts`
          },
          {
            template: 'tabbed/App/Containers/MainTabs/FifthTab.ejs',
            target: `js/App/Containers/LaunchScreenTabs/FifthTab.ts`
          },
          {
            template: 'tabbed/App/Containers/MainTabs/FirstTab.ejs',
            target: `js/App/Containers/LaunchScreenTabs/FirstTab.ts`
          },
          {
            template: 'tabbed/App/Containers/MainTabs/FourthTab.ejs',
            target: `js/App/Containers/LaunchScreenTabs/FourthTab.ts`
          },
          {
            template: 'tabbed/App/Containers/MainTabs/SecondTab.ejs',
            target: `js/App/Containers/LaunchScreenTabs/SecondTab.ts`
          },
          {
            template: 'tabbed/App/Containers/MainTabs/ThirdTab.ejs',
            target: `js/App/Containers/LaunchScreenTabs/ThirdTab.ts`
          }
        ]
        await ignite.copyBatch(context, jobs, props)
        break;
      }
      case 'Top Tabbed Screen':{
        spinner.text = '▸ copying files'
        spinner.start()

        filesystem.copy(`${__dirname}/templates/toptabbed/App/Components/LaunchScreen`, `${process.cwd()}/js/App/Components/LaunchScreen`, {
          overwrite: true
        })
        filesystem.copy(`${__dirname}/templates/toptabbed/App/Components/MainTabs`, `${process.cwd()}/js/App/Components/LaunchScreenTabs`, {
          overwrite: true
        })

        filesystem.copy(`${__dirname}/templates/toptabbed/Tests/Components/LaunchScreen`, `${process.cwd()}/js/Tests/Components/LaunchScreen`, {
          overwrite: true
        })

        spinner.stop()
        const props = { name:'LaunchScreen' }
        const jobs = [
          {
            template: 'toptabbed/Tests/Components/MainTabs/FirstTab.test.ejs',
            target: `js/Tests/Containers/LaunchScreenTabs/FirstTabComponent.test.tsx`
          },
          {
            template: 'toptabbed/Tests/Components/MainTabs/SecondTab.test.ejs',
            target: `js/Tests/Containers/LaunchScreenTabs/SecondTabComponent.test.tsx`
          },
          {
            template: 'toptabbed/Tests/Components/MainTabs/ThirdTab.test.ejs',
            target: `js/Tests/Containers/LaunchScreenTabs/ThirdTabComponent.test.tsx`
          },

          {
            template: 'toptabbed/App/Components/ttlaunchscreenComponent.ejs',
            target: `js/App/Components/LaunchScreen/LaunchScreenComponent.tsx`
          },
          {
            template: 'toptabbed/App/Containers/ttlaunchscreen.ejs',
            target: `js/App/Containers/LaunchScreen.ts`
          },
          {
            template: 'toptabbed/App/Containers/MainTabs/FirstTab.ejs',
            target: `js/App/Containers/LaunchScreenTabs/FirstTab.ts`
          },
          {
            template: 'toptabbed/App/Containers/MainTabs/SecondTab.ejs',
            target: `js/App/Containers/LaunchScreenTabs/SecondTab.ts`
          },
          {
            template: 'toptabbed/App/Containers/MainTabs/ThirdTab.ejs',
            target: `js/App/Containers/LaunchScreenTabs/ThirdTab.ts`
          }
        ]
        await ignite.copyBatch(context, jobs, props)

        break;
      }
      case 'Navigation Drawer Screen':{
        spinner.text = '▸ copying files'
        spinner.start()

        filesystem.copy(`${__dirname}/templates/drawer/App/Components/ExampleComponent`, `${process.cwd()}/js/App/Components/ExampleComponent`, {
          overwrite: true
        })
        filesystem.copy(`${__dirname}/templates/drawer/App/Components/LaunchScreen`, `${process.cwd()}/js/App/Components/LaunchScreen`, {
          overwrite: true
        })
        filesystem.copy(`${__dirname}/templates/drawer/App/Components/MainTabs`, `${process.cwd()}/js/App/Components/LaunchScreenTabs`, {
          overwrite: true
        })
        filesystem.copy(`${__dirname}/templates/drawer/App/Components/NavHeaders`, `${process.cwd()}/js/App/Components/NavHeaders`, {
          overwrite: true
        })

        filesystem.copy(`${__dirname}/templates/drawer/Tests/Components/NavHeaders`, `${process.cwd()}/js/Tests/Components/NavHeaders`, {
          overwrite: true
        })
        filesystem.copy(`${__dirname}/templates/drawer/Tests/Components/LaunchScreen`, `${process.cwd()}/js/Tests/Components/LaunchScreen`, {
          overwrite: true
        })
        filesystem.copy(`${__dirname}/templates/drawer/Tests/Components/ExampleComponent`, `${process.cwd()}/js/Tests/Components/ExampleComponent`, {
          overwrite: true
        })

        spinner.stop()
        const props = { name:'LaunchScreen' }
        const jobs = [
          {
            template: 'drawer/Tests/Components/MainTabs/FifthTabComponent.test.ejs',
            target: `js/Tests/Components/LaunchScreen/FifthTabComponent.test.tsx`
          },
          {
            template: 'drawer/Tests/Components/MainTabs/FirstTabComponent.test.ejs',
            target: `js/Tests/Components/LaunchScreen/FirstTabComponent.test.tsx`
          },
          {
            template: 'drawer/Tests/Components/MainTabs/FourthTabComponent.test.ejs',
            target: `js/Tests/Components/LaunchScreen/FourthTabComponent.test.tsx`
          },
          {
            template: 'drawer/Tests/Components/MainTabs/SecondTabComponent.test.ejs',
            target: `js/Tests/Components/LaunchScreen/SecondTabComponent.test.tsx`
          },
          {
            template: 'drawer/Tests/Components/MainTabs/ThirdTabComponent.test.ejs',
            target: `js/Tests/Components/LaunchScreen/ThirdTabComponent.test.tsx`
          },

          {
            template: 'drawer/App/Components/LaunchScreenComponent.ejs',
            target: `js/App/Components/LaunchScreen/LaunchScreenComponent.tsx`
          },
          {
            template: 'drawer/App/Containers/LaunchScreen.ejs',
            target: `js/App/Containers/LaunchScreen.ts`
          },
          {
            template: 'drawer/App/Containers/MainTabs/FifthTab.ejs',
            target: `js/App/Containers/LaunchScreenTabs/FifthTab.ts`
          },
          {
            template: 'drawer/App/Containers/MainTabs/FirstTab.ejs',
            target: `js/App/Containers/LaunchScreenTabs/FirstTab.ts`
          },
          {
            template: 'drawer/App/Containers/MainTabs/FourthTab.ejs',
            target: `js/App/Containers/LaunchScreenTabs/FourthTab.ts`
          },
          {
            template: 'drawer/App/Containers/MainTabs/SecondTab.ejs',
            target: `js/App/Containers/LaunchScreenTabs/SecondTab.ts`
          },
          {
            template: 'drawer/App/Containers/MainTabs/ThirdTab.ejs',
            target: `js/App/Containers/LaunchScreenTabs/ThirdTab.ts`
          }
        ]
        await ignite.copyBatch(context, jobs, props)
        break;
      }
      case 'Social Media Screen':{
        spinner.text = '▸ copying files'
        spinner.start()

        filesystem.copy(`${__dirname}/templates/socialmedia/App`, `${process.cwd()}/js/App`, {
          overwrite: true
        })
        filesystem.copy(`${__dirname}/templates/socialmedia/Tests`, `${process.cwd()}/js/Tests`, {
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
  spinner.text = `▸ linking native libraries`
  spinner.start()
  await system.spawn('react-native link', { stdio: 'ignore' })
  spinner.stop()

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
