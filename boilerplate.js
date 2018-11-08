const options = require('./options')
const { merge, pipe, assoc, omit, __ } = require('ramda')
const { getReactNativeVersion } = require('./lib/react-native-version')

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
  filesystem.copy(`${__dirname}/boilerplate/App`, `${process.cwd()}/App`, {
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
    { template: 'TestConfig/Setup/test-preprocessor.js', target: 'TestConfig/Setup/test-preprocessor.js' },
    { template: 'TestConfig/Setup/test-setup.js', target: 'TestConfig/Setup/test-setup.js' },
    { template: 'TestConfig/Setup/test-shim.js', target: 'TestConfig/Setup/test-shim.js' },
    { template: 'TestConfig/__mocks__/fileMock.js', target: 'TestConfig/__mocks__/fileMock.js' },
    { template: 'TestConfig/__mocks__/react-native-i18n.mock.js', target: 'TestConfig/__mocks__/react-native-i18n.mock.js' },
    { template: 'TestConfig/__mocks__/react-native-mapbox-gl.mock.js', target: 'TestConfig/__mocks__/react-native-mapbox-gl.mock.js' },
    { template: 'TestConfig/__mocks__/styleMock.js', target: 'TestConfig/__mocks__/styleMock.js' },
    { template: 'tsconfig.json', target: 'tsconfig.json' },
    { template: 'jsconfig.json', target: 'jsconfig.json' },
    { template: 'tslint.json', target: 'tslint.json' },
    { template: 'typings.d.ts', target: 'typings.d.ts' },
    { template: 'app.json', target: 'app.json' }

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

        filesystem.copy(`${__dirname}/templates/login`, `${process.cwd()}/App`, {
          overwrite: true
        })
        spinner.stop()

        break;
      }
      case 'Sms Login Screen':{
        spinner.text = '▸ copying files'
        spinner.start()

        filesystem.copy(`${__dirname}/templates/smslogin`, `${process.cwd()}/App`, {
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
      case 'Tabbed Screen':{
        spinner.text = '▸ copying files'
        spinner.start()

        filesystem.copy(`${__dirname}/templates/tabbed`, `${process.cwd()}/App`, {
          overwrite: true
        })
        spinner.stop()

        break;
      }
      case 'Navigation Drawer Screen':{
        spinner.text = '▸ copying files'
        spinner.start()

        filesystem.copy(`${__dirname}/templates/drawer`, `${process.cwd()}/App`, {
          overwrite: true
        })
        spinner.stop()
        break;
      }
      case 'Social Media Screen':{
        spinner.text = '▸ copying files'
        spinner.start()

        filesystem.copy(`${__dirname}/templates/socialmedia`, `${process.cwd()}/App`, {
          overwrite: true
        })
        spinner.stop()
          const appNavFilePath = `${process.cwd()}/App/Navigation/AppNavigation.tsx`
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
