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

  const name = pascalCase(parameters.first)
  const props = { name }
  let jobs = [];
  if (parameters.second === "TopTabbed"){
    filesystem.copy(`${__dirname}/../templates/toptabbed/Components/LaunchScreen`, `${process.cwd()}/js/App/Components/LaunchScreen`, {
      overwrite: true
    })
    filesystem.copy(`${__dirname}/../templates/toptabbed/Components/MainTabs`, `${process.cwd()}/js/App/Components/${name}Tabs`, {
      overwrite: true
    })
    const jobs = [
      {
        template: 'toptabbed/Components/ttlaunchscreenComponent.ejs',
        target: `js/App/Components/${name}/${name}Component.tsx`
      },
      {
        template: 'toptabbed/Containers/ttlaunchscreen.ejs',
        target: `js/App/Containers/${name}.ts`
      },
      {
        template: 'toptabbed/Containers/MainTabs/CallsScreen.ejs',
        target: `js/App/Containers/${name}Tabs/CallsScreen.ts`
      },
      {
        template: 'toptabbed/Containers/MainTabs/ChatsScreen.ejs',
        target: `js/App/Containers/${name}Tabs/ChatsScreen.ts`
      },
      {
        template: 'toptabbed/Containers/MainTabs/GroupsScreen.ejs',
        target: `js/App/Containers/${name}Tabs/GroupsScreen.ts`
      }
    ]
    await ignite.copyBatch(context, jobs, props)

  } else if (parameters.second === "BottomTabbed"){
    filesystem.copy(`${__dirname}/../templates/tabbed/Components/ExampleComponent`, `${process.cwd()}/js/App/Components/ExampleComponent`, {
      overwrite: true
    })
    filesystem.copy(`${__dirname}/../templates/tabbed/Components/LaunchScreen`, `${process.cwd()}/js/App/Components/LaunchScreen`, {
      overwrite: true
    })
    filesystem.copy(`${__dirname}/../templates/tabbed/Components/MainTabs`, `${process.cwd()}/js/App/Components/${name}Tabs`, {
      overwrite: true
    })
    const jobs = [
      {
        template: 'tabbed/Components/LaunchScreenComponent.ejs',
        target: `js/App/Components/${name}/${name}Component.tsx`
      },
      {
        template: 'tabbed/Containers/LaunchScreen.ejs',
        target: `js/App/Containers/${name}.ts`
      },
      {
        template: 'tabbed/Containers/MainTabs/FifthTab.ejs',
        target: `js/App/Containers/${name}Tabs/FifthTab.ts`
      },
      {
        template: 'tabbed/Containers/MainTabs/FirstTab.ejs',
        target: `js/App/Containers/${name}Tabs/FirstTab.ts`
      },
      {
        template: 'tabbed/Containers/MainTabs/FourthTab.ejs',
        target: `js/App/Containers/${name}Tabs/FourthTab.ts`
      },
      {
        template: 'tabbed/Containers/MainTabs/SecondTab.ejs',
        target: `js/App/Containers/${name}Tabs/SecondTab.ts`
      },
      {
        template: 'tabbed/Containers/MainTabs/ThirdTab.ejs',
        target: `js/App/Containers/${name}Tabs/ThirdTab.ts`
      }
    ]
    await ignite.copyBatch(context, jobs, props)
  } else if (parameters.second === "Drawer"){
    filesystem.copy(`${__dirname}/../templates/drawer/Components/ExampleComponent`, `${process.cwd()}/js/App/Components/ExampleComponent`, {
      overwrite: true
    })
    filesystem.copy(`${__dirname}/../templates/drawer/Components/LaunchScreen`, `${process.cwd()}/js/App/Components/LaunchScreen`, {
      overwrite: true
    })
    filesystem.copy(`${__dirname}/../templates/drawer/Components/MainTabs`, `${process.cwd()}/js/App/Components/${name}Tabs`, {
      overwrite: true
    })
    filesystem.copy(`${__dirname}/../templates/drawer/Components/NavHeaders`, `${process.cwd()}/js/App/Components/NavHeaders`, {
      overwrite: true
    })
    const jobs = [
      {
        template: 'drawer/Components/LaunchScreenComponent.ejs',
        target: `js/App/Components/${name}/${name}Component.tsx`
      },
      {
        template: 'drawer/Containers/LaunchScreen.ejs',
        target: `js/App/Containers/${name}.ts`
      },
      {
        template: 'drawer/Containers/MainTabs/FifthTab.ejs',
        target: `js/App/Containers/${name}Tabs/FifthTab.ts`
      },
      {
        template: 'drawer/Containers/MainTabs/FirstTab.ejs',
        target: `js/App/Containers/${name}Tabs/FirstTab.ts`
      },
      {
        template: 'drawer/Containers/MainTabs/FourthTab.ejs',
        target: `js/App/Containers/${name}Tabs/FourthTab.ts`
      },
      {
        template: 'drawer/Containers/MainTabs/SecondTab.ejs',
        target: `js/App/Containers/${name}Tabs/SecondTab.ts`
      },
      {
        template: 'drawer/Containers/MainTabs/ThirdTab.ejs',
        target: `js/App/Containers/${name}Tabs/ThirdTab.ts`
      }
    ]
    await ignite.copyBatch(context, jobs, props)
  } else if (parameters.second === "CollapsibleToolbar") {
    const jobs = [
      {
        template: 'collapsible/Components/index.ejs',
        target: `js/App/Components/${name}/index.ts`
      },
      {
        template: 'collapsible/Components/Component.ejs',
        target: `js/App/Components/${name}/${name}Component.tsx`
      },
      {
        template: 'collapsible/Components/MainContent.ejs',
        target: `js/App/Components/${name}/${name}MainContent.tsx`
      },
      {
        template: 'collapsible/Components/ToolbarContent.ejs',
        target: `js/App/Components/${name}/${name}ToolbarContent.tsx`
      },
      {
        template: 'collapsible/Containers/LaunchScreen.ejs',
        target: `js/App/Containers/${name}.ts`
      }
    ]
    await ignite.copyBatch(context, jobs, props)
  } else if (parameters.second === "Backdrop") {
    const jobs = [
      {
        template: 'backdrop/Components/index.ejs',
        target: `js/App/Components/${name}/index.ts`
      },
      {
        template: 'backdrop/Components/Component.ejs',
        target: `js/App/Components/${name}/${name}Component.tsx`
      },
      {
        template: 'backdrop/Components/Backdrop.ejs',
        target: `js/App/Components/${name}/${name}BackLayerContent.tsx`
      },
      {
        template: 'backdrop/Components/Content.ejs',
        target: `js/App/Components/${name}/${name}FrontLayerContent.tsx`
      },
      {
        template: 'backdrop/Containers/LaunchScreen.ejs',
        target: `js/App/Containers/${name}.ts`
      }
    ]
    await ignite.copyBatch(context, jobs, props)
  } else if (parameters.second === "CollapsibleToolbarDrawer"){
    filesystem.copy(`${__dirname}/../templates/collapsibledrawer/Components/MainTabs`, `${process.cwd()}/js/App/Components/${name}Tabs`, {
      overwrite: true
    })
    filesystem.copy(`${__dirname}/../templates/collapsibledrawer/Components/LaunchScreen`, `${process.cwd()}/js/App/Components/LaunchScreen`, {
      overwrite: true
    })
    const jobs = [
      {
        template: 'collapsibledrawer/Components/LaunchScreenComponent.ejs',
        target: `js/App/Components/${name}/${name}Component.tsx`
      },
      {
        template: 'collapsibledrawer/Containers/LaunchScreen.ejs',
        target: `js/App/Containers/${name}.ts`
      },
      {
        template: 'collapsibledrawer/Containers/MainTabs/FifthTab.ejs',
        target: `js/App/Containers/${name}Tabs/FifthTab.ts`
      },
      {
        template: 'collapsibledrawer/Containers/MainTabs/FirstTab.ejs',
        target: `js/App/Containers/${name}Tabs/FirstTab.ts`
      },
      {
        template: 'collapsibledrawer/Containers/MainTabs/FourthTab.ejs',
        target: `js/App/Containers/${name}Tabs/FourthTab.ts`
      },
      {
        template: 'collapsibledrawer/Containers/MainTabs/SecondTab.ejs',
        target: `js/App/Containers/${name}Tabs/SecondTab.ts`
      },
      {
        template: 'collapsibledrawer/Containers/MainTabs/ThirdTab.ejs',
        target: `js/App/Containers/${name}Tabs/ThirdTab.ts`
      }
    ]
    await ignite.copyBatch(context, jobs, props)
  } else if (name === "LoginScreen"){
    filesystem.copy(`${__dirname}/../templates/login/Components/LoginScreen`, `${process.cwd()}/js/App/Components/LoginScreen`, {
      overwrite: true
    })
    filesystem.copy(`${__dirname}/../templates/login/Redux/Login`, `${process.cwd()}/js/App/Redux/Login`, {
      overwrite: true
    })
    jobs = [
      {
        template: 'login/Containers/LoginScreen.ts',
        target: `js/App/Containers/LoginScreen.ts`
      },
      {
        template: 'login/Containers/Styles/LoginScreenStyles.tsx',
        target: `js/App/Containers/Styles/LoginScreenStyles.tsx`
      }
    ]
  } else if (name === "SmsLoginScreen"){
    filesystem.copy(`${__dirname}/../templates/smslogin/Components/LoginScreen`, `${process.cwd()}/js/App/Components/LoginScreen`, {
      overwrite: true
    })
    filesystem.copy(`${__dirname}/../templates/smslogin/Redux/Login`, `${process.cwd()}/js/App/Redux/Login`, {
      overwrite: true
    })
    jobs = [
      {
        template: 'smslogin/Containers/LoginScreen.ts',
        target: `js/App/Containers/LoginScreen.ts`
      },
      {
        template: 'smslogin/Containers/Styles/LoginScreenStyles.tsx',
        target: `js/App/Containers/Styles/LoginScreenStyles.tsx`
      }
    ]
  } else {
    jobs = [
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
      after: patterns[patterns.constants.PATTERN_ROUTES],
      insert: routeToAdd
    })
  } else {
    print.info('Container created, manually add it to your navigation')
  }
}
