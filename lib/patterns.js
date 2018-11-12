const constants = {
  PATTERN_IMPORTS: 'imports',
  PATTERN_ROUTES: 'routes'
}

module.exports = {
  constants,
  // [constants.PATTERN_IMPORTS]: `import[\\c\\C]*from\\s+'react-navigation';?`,
  [constants.PATTERN_IMPORTS]: `import { createSwitchNavigator, createStackNavigator } from "react-navigation";`,
  [constants.PATTERN_ROUTES]: 'export const MainNav'
}
