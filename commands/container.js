// @cliDescription  Generates a redux smart component.

const patterns = require('../lib/patterns')

module.exports = async function (context) {
  // grab some features
  const { parameters, strings, print, ignite, filesystem } = context
  const { pascalCase, isBlank } = strings
  const config = ignite.loadIgniteConfig()

  // validation
  if (isBlank(parameters.first)) {
    print.info(`${context.runtime.brand} generate container <name>\n`)
    print.info('A name is required.')
    return
  }

  let name = pascalCase(parameters.first)
  const props = { name }

  const containerTypeMessage = 'What container type you want ?'
  const containerTypeChoices = [
    'Simple',
    'Collapsible Toolbar',
    'Backdrop',
    'With Top Tabbed Navigation',
    'With Bottom Tabbed Navigation',
    'With Drawer Navigation',
    'Collapsible Toolbar With Drawer Navigation',
    'Simple Login',
    'Sms Login'
  ]
  let containerType = parameters.options.containerType

  if (containerType !== undefined && containerType !== null) {
    switch (containerType) {
      case 'simple' : { containerType = 'Simple'; break }
      case 'collapsible' : { containerType = 'Collapsible Toolbar'; break }
      case 'backdrop' : { containerType = 'Backdrop'; break }
      case 'top' : { containerType = 'With Top Tabbed Navigation'; break }
      case 'bottom' : { containerType = 'With Bottom Tabbed Navigation'; break }
      case 'drawer' : { containerType = 'With Drawer Navigation'; break }
      case 'collapsibledrawer' : { containerType = 'Collapsible Toolbar With Drawer Navigation'; break }
      case 'login' : { containerType = 'Simple Login'; break }
      case 'smslogin' : { containerType = 'Sms Login'; break }
      default : { containerType = undefined; break }
    }
  }

  if (!containerType) {
    // as question 1
    const codeAnswers = await context.prompt.ask({
      name: 'type',
      type: 'list',
      message: containerTypeMessage,
      choices: containerTypeChoices
    })
    containerType = codeAnswers.type
  }

  let jobs = []
  if (containerType === 'With Top Tabbed Navigation') {
    filesystem.copy(`${__dirname}/../templates/toptabbed/App/Components/LaunchScreen`, `${process.cwd()}/js/App/Components/LaunchScreen`, {
      overwrite: true
    })
    filesystem.copy(`${__dirname}/../templates/toptabbed/App/Components/MainTabs`, `${process.cwd()}/js/App/Components/${name}Tabs`, {
      overwrite: true
    })

    filesystem.copy(`${__dirname}/../templates/toptabbed/Tests/Components/LaunchScreen`, `${process.cwd()}/js/Tests/Components/LaunchScreen`, {
      overwrite: true
    })

    const jobs = [

      {
        template: 'toptabbed/Tests/Components/MainTabs/FirstTab.test.ejs',
        target: `js/Tests/Containers/${name}Tabs/FirstTabComponent.test.tsx`
      },
      {
        template: 'toptabbed/Tests/Components/MainTabs/SecondTab.test.ejs',
        target: `js/Tests/Containers/${name}Tabs/SecondTabComponent.test.tsx`
      },
      {
        template: 'toptabbed/Tests/Components/MainTabs/ThirdTab.test.ejs',
        target: `js/Tests/Containers/${name}Tabs/ThirdTabComponent.test.tsx`
      },

      {
        template: 'toptabbed/App/Components/ttlaunchscreenComponent.ejs',
        target: `js/App/Components/${name}/${name}Component.tsx`
      },
      {
        template: 'toptabbed/App/Containers/ttlaunchscreen.ejs',
        target: `js/App/Containers/${name}.ts`
      },
      {
        template: 'toptabbed/App/Containers/MainTabs/FirstTab.ejs',
        target: `js/App/Containers/${name}Tabs/FirstTab.ts`
      },
      {
        template: 'toptabbed/App/Containers/MainTabs/SecondTab.ejs',
        target: `js/App/Containers/${name}Tabs/SecondTab.ts`
      },
      {
        template: 'toptabbed/App/Containers/MainTabs/ThirdTab.ejs',
        target: `js/App/Containers/${name}Tabs/ThirdTab.ts`
      }
    ]
    await ignite.copyBatch(context, jobs, props)
  } else if (containerType === 'With Bottom Tabbed Navigation') {
    filesystem.copy(`${__dirname}/../templates/tabbed/App/Components/ExampleComponent`, `${process.cwd()}/js/App/Components/ExampleComponent`, {
      overwrite: true
    })
    filesystem.copy(`${__dirname}/../templates/tabbed/App/Components/LaunchScreen`, `${process.cwd()}/js/App/Components/LaunchScreen`, {
      overwrite: true
    })
    filesystem.copy(`${__dirname}/../templates/tabbed/App/Components/MainTabs`, `${process.cwd()}/js/App/Components/${name}Tabs`, {
      overwrite: true
    })

    filesystem.copy(`${__dirname}/../templates/tabbed/Tests/Components/ExampleComponent`, `${process.cwd()}/js/Tests/Components/ExampleComponent`, {
      overwrite: true
    })
    filesystem.copy(`${__dirname}/../templates/tabbed/Tests/Components/LaunchScreen`, `${process.cwd()}/js/Tests/Components/LaunchScreen`, {
      overwrite: true
    })

    const jobs = [
      {
        template: 'tabbed/Tests/Components/MainTabs/FifthTabComponent.test.ejs',
        target: `js/Tests/Components/${name}/FifthTabComponent.test.tsx`
      },
      {
        template: 'tabbed/Tests/Components/MainTabs/FirstTabComponent.test.ejs',
        target: `js/Tests/Components/${name}/FirstTabComponent.test.tsx`
      },
      {
        template: 'tabbed/Tests/Components/MainTabs/FourthTabComponent.test.ejs',
        target: `js/Tests/Components/${name}/FourthTabComponent.test.tsx`
      },
      {
        template: 'tabbed/Tests/Components/MainTabs/SecondTabComponent.test.ejs',
        target: `js/Tests/Components/${name}/SecondTabComponent.test.tsx`
      },
      {
        template: 'tabbed/Tests/Components/MainTabs/ThirdTabComponent.test.ejs',
        target: `js/Tests/Components/${name}/ThirdTabComponent.test.tsx`
      },

      {
        template: 'tabbed/App/Components/LaunchScreenComponent.ejs',
        target: `js/App/Components/${name}/${name}Component.tsx`
      },
      {
        template: 'tabbed/App/Containers/LaunchScreen.ejs',
        target: `js/App/Containers/${name}.ts`
      },
      {
        template: 'tabbed/App/Containers/MainTabs/FifthTab.ejs',
        target: `js/App/Containers/${name}Tabs/FifthTab.ts`
      },
      {
        template: 'tabbed/App/Containers/MainTabs/FirstTab.ejs',
        target: `js/App/Containers/${name}Tabs/FirstTab.ts`
      },
      {
        template: 'tabbed/App/Containers/MainTabs/FourthTab.ejs',
        target: `js/App/Containers/${name}Tabs/FourthTab.ts`
      },
      {
        template: 'tabbed/App/Containers/MainTabs/SecondTab.ejs',
        target: `js/App/Containers/${name}Tabs/SecondTab.ts`
      },
      {
        template: 'tabbed/App/Containers/MainTabs/ThirdTab.ejs',
        target: `js/App/Containers/${name}Tabs/ThirdTab.ts`
      }
    ]
    await ignite.copyBatch(context, jobs, props)
  } else if (containerType === 'With Drawer Navigation') {
    filesystem.copy(`${__dirname}/../templates/drawer/App/Components/ExampleComponent`, `${process.cwd()}/js/App/Components/ExampleComponent`, {
      overwrite: true
    })
    filesystem.copy(`${__dirname}/../templates/drawer/App/Components/LaunchScreen`, `${process.cwd()}/js/App/Components/LaunchScreen`, {
      overwrite: true
    })
    filesystem.copy(`${__dirname}/../templates/drawer/App/Components/MainTabs`, `${process.cwd()}/js/App/Components/${name}Tabs`, {
      overwrite: true
    })
    filesystem.copy(`${__dirname}/../templates/drawer/App/Components/NavHeaders`, `${process.cwd()}/js/App/Components/NavHeaders`, {
      overwrite: true
    })

    filesystem.copy(`${__dirname}/../templates/drawer/Tests/Components/NavHeaders`, `${process.cwd()}/js/Tests/Components/NavHeaders`, {
      overwrite: true
    })
    filesystem.copy(`${__dirname}/../templates/drawer/Tests/Components/LaunchScreen`, `${process.cwd()}/js/Tests/Components/LaunchScreen`, {
      overwrite: true
    })
    filesystem.copy(`${__dirname}/../templates/drawer/Tests/Components/ExampleComponent`, `${process.cwd()}/js/Tests/Components/ExampleComponent`, {
      overwrite: true
    })

    const jobs = [
      {
        template: 'drawer/Tests/Components/MainTabs/FifthTabComponent.test.ejs',
        target: `js/Tests/Components/${name}/FifthTabComponent.test.tsx`
      },
      {
        template: 'drawer/Tests/Components/MainTabs/FirstTabComponent.test.ejs',
        target: `js/Tests/Components/${name}/FirstTabComponent.test.tsx`
      },
      {
        template: 'drawer/Tests/Components/MainTabs/FourthTabComponent.test.ejs',
        target: `js/Tests/Components/${name}/FourthTabComponent.test.tsx`
      },
      {
        template: 'drawer/Tests/Components/MainTabs/SecondTabComponent.test.ejs',
        target: `js/Tests/Components/${name}/SecondTabComponent.test.tsx`
      },
      {
        template: 'drawer/Tests/Components/MainTabs/ThirdTabComponent.test.ejs',
        target: `js/Tests/Components/${name}/ThirdTabComponent.test.tsx`
      },

      {
        template: 'drawer/App/Components/LaunchScreenComponent.ejs',
        target: `js/App/Components/${name}/${name}Component.tsx`
      },
      {
        template: 'drawer/App/Containers/LaunchScreen.ejs',
        target: `js/App/Containers/${name}.ts`
      },
      {
        template: 'drawer/App/Containers/MainTabs/FifthTab.ejs',
        target: `js/App/Containers/${name}Tabs/FifthTab.ts`
      },
      {
        template: 'drawer/App/Containers/MainTabs/FirstTab.ejs',
        target: `js/App/Containers/${name}Tabs/FirstTab.ts`
      },
      {
        template: 'drawer/App/Containers/MainTabs/FourthTab.ejs',
        target: `js/App/Containers/${name}Tabs/FourthTab.ts`
      },
      {
        template: 'drawer/App/Containers/MainTabs/SecondTab.ejs',
        target: `js/App/Containers/${name}Tabs/SecondTab.ts`
      },
      {
        template: 'drawer/App/Containers/MainTabs/ThirdTab.ejs',
        target: `js/App/Containers/${name}Tabs/ThirdTab.ts`
      }
    ]
    await ignite.copyBatch(context, jobs, props)
  } else if (containerType === 'Collapsible Toolbar') {
    const jobs = [
      {
        template: 'collapsible/Tests/Components/Test.test.ejs',
        target: `js/Tests/Components/${name}/${name}.test.tsx`
      },
      {
        template: 'collapsible/App/Components/index.ejs',
        target: `js/App/Components/${name}/index.ts`
      },
      {
        template: 'collapsible/App/Components/Component.ejs',
        target: `js/App/Components/${name}/${name}Component.tsx`
      },
      {
        template: 'collapsible/App/Components/MainContent.ejs',
        target: `js/App/Components/${name}/${name}MainContent.tsx`
      },
      {
        template: 'collapsible/App/Components/ToolbarContent.ejs',
        target: `js/App/Components/${name}/${name}ToolbarContent.tsx`
      },
      {
        template: 'collapsible/App/Containers/LaunchScreen.ejs',
        target: `js/App/Containers/${name}.ts`
      }
    ]
    await ignite.copyBatch(context, jobs, props)
  } else if (containerType === 'Backdrop') {
    const jobs = [
      {
        template: 'backdrop/Tests/Components/Test.test.ejs',
        target: `js/Tests/Components/${name}/${name}.test.tsx`
      },
      {
        template: 'backdrop/App/Components/index.ejs',
        target: `js/App/Components/${name}/index.ts`
      },
      {
        template: 'backdrop/App/Components/Component.ejs',
        target: `js/App/Components/${name}/${name}Component.tsx`
      },
      {
        template: 'backdrop/App/Components/Backdrop.ejs',
        target: `js/App/Components/${name}/${name}BackLayerContent.tsx`
      },
      {
        template: 'backdrop/App/Components/Content.ejs',
        target: `js/App/Components/${name}/${name}FrontLayerContent.tsx`
      },
      {
        template: 'backdrop/App/Containers/LaunchScreen.ejs',
        target: `js/App/Containers/${name}.ts`
      }
    ]
    await ignite.copyBatch(context, jobs, props)
  } else if (containerType === 'Collapsible Toolbar With Drawer Navigation') {
    filesystem.copy(`${__dirname}/../templates/collapsibledrawer/App/Components/MainTabs`, `${process.cwd()}/js/App/Components/${name}Tabs`, {
      overwrite: true
    })
    filesystem.copy(`${__dirname}/../templates/collapsibledrawer/App/Components/LaunchScreen`, `${process.cwd()}/js/App/Components/LaunchScreen`, {
      overwrite: true
    })

    filesystem.copy(`${__dirname}/../templates/collapsibledrawer/Tests/Components/LaunchScreen`, `${process.cwd()}/js/Tests/Components/LaunchScreen`, {
      overwrite: true
    })

    const jobs = [
      {
        template: 'collapsibledrawer/Tests/Components/MainTabs/FifthTab.test.ejs',
        target: `js/Tests/Components/${name}Tabs/FifthTab.test.tsx`
      },
      {
        template: 'collapsibledrawer/Tests/Components/MainTabs/FirstTab.test.ejs',
        target: `js/Tests/Components/${name}Tabs/FirstTab.test.tsx`
      },
      {
        template: 'collapsibledrawer/Tests/Components/MainTabs/FourthTab.test.ejs',
        target: `js/Tests/Components/${name}Tabs/FourthTab.test.tsx`
      },
      {
        template: 'collapsibledrawer/Tests/Components/MainTabs/SecondTab.test.ejs',
        target: `js/Tests/Components/${name}Tabs/SecondTab.test.tsx`
      },
      {
        template: 'collapsibledrawer/Tests/Components/MainTabs/ThirdTab.test.ejs',
        target: `js/Tests/Components/${name}Tabs/ThirdTab.test.tsx`
      },

      {
        template: 'collapsibledrawer/App/Components/LaunchScreenComponent.ejs',
        target: `js/App/Components/${name}/${name}Component.tsx`
      },
      {
        template: 'collapsibledrawer/App/Containers/LaunchScreen.ejs',
        target: `js/App/Containers/${name}.ts`
      },
      {
        template: 'collapsibledrawer/App/Containers/MainTabs/FifthTab.ejs',
        target: `js/App/Containers/${name}Tabs/FifthTab.ts`
      },
      {
        template: 'collapsibledrawer/App/Containers/MainTabs/FirstTab.ejs',
        target: `js/App/Containers/${name}Tabs/FirstTab.ts`
      },
      {
        template: 'collapsibledrawer/App/Containers/MainTabs/FourthTab.ejs',
        target: `js/App/Containers/${name}Tabs/FourthTab.ts`
      },
      {
        template: 'collapsibledrawer/App/Containers/MainTabs/SecondTab.ejs',
        target: `js/App/Containers/${name}Tabs/SecondTab.ts`
      },
      {
        template: 'collapsibledrawer/App/Containers/MainTabs/ThirdTab.ejs',
        target: `js/App/Containers/${name}Tabs/ThirdTab.ts`
      }
    ]
    await ignite.copyBatch(context, jobs, props)
  } else if (containerType === 'Simple Login') {
    name = 'LoginScreen'
    filesystem.copy(`${__dirname}/../templates/login/App/Components/LoginScreen`, `${process.cwd()}/js/App/Components/LoginScreen`, {
      overwrite: true
    })
    filesystem.copy(`${__dirname}/../templates/login/App/Redux/Login`, `${process.cwd()}/js/App/Redux/Login`, {
      overwrite: true
    })
    filesystem.copy(`${__dirname}/../templates/login/Tests/Components`, `${process.cwd()}/js/Tests/Components`, {
      overwrite: true
    })
    jobs = [
      {
        template: 'login/App/Containers/LoginScreen.ts',
        target: `js/App/Containers/LoginScreen.ts`
      }
    ]
  } else if (containerType === 'Sms Login') {
    name = 'LoginScreen'
    filesystem.copy(`${__dirname}/../templates/smslogin/App/Components/LoginScreen`, `${process.cwd()}/js/App/Components/LoginScreen`, {
      overwrite: true
    })
    filesystem.copy(`${__dirname}/../templates/smslogin/App/Redux/Login`, `${process.cwd()}/js/App/Redux/Login`, {
      overwrite: true
    })
    filesystem.copy(`${__dirname}/../templates/smslogin/Tests/Components`, `${process.cwd()}/js/Tests/Components`, {
      overwrite: true
    })
    jobs = [
      {
        template: 'smslogin/App/Containers/LoginScreen.ts',
        target: `js/App/Containers/LoginScreen.ts`
      }
    ]
  } else {
    jobs = [
      {
        template: 'container-component-test.ejs',
        target: `js/Tests/Components/${name}/${name}Component.test.tsx`
      },
      {
        template: 'container-component.ejs',
        target: `js/App/Components/${name}/${name}Component.tsx`
      },
      {
        template: 'container.ejs',
        target: `js/App/Containers/${name}.ts`
      },
      {
        template: 'container-style.ejs',
        target: `js/App/Components/${name}/Styles/${name}Style.tsx`
      }
    ]
  }

  await ignite.copyBatch(context, jobs, props)

  // if using `react-navigation` go the extra step
  // and insert the container into the nav router
  if (config.navigation === 'react-navigation') {
    const containerName = name
    const appNavFilePath = `${process.cwd()}/js/App/Navigation/AppNavigation.tsx`
    const importToAdd = `import ${containerName} from '../Containers/${containerName}'`
    const routeToAdd = `  ${containerName}: { screen: ${containerName} },`

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
      after: (containerType === 'Simple Login' || containerType === 'Sms Login') ? 'const PrimaryNav' : patterns[patterns.constants.PATTERN_ROUTES],
      insert: routeToAdd
    })
  } else {
    print.info('Container created, manually add it to your navigation')
  }
}
