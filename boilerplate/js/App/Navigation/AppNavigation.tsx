import { createSwitchNavigator, createStackNavigator, createAppContainer } from "react-navigation";
import styles from "./Styles/NavigationStyles";
import LaunchScreen from "../Containers/LaunchScreen";


export const MainNav = createStackNavigator({
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: "none",
  initialRouteName: "LaunchScreen",
  navigationOptions: {
    headerStyle: styles.header
  }
});

// Manifest of possible screens
const PrimaryNav = createSwitchNavigator({
  LaunchScreen: { screen: createAppContainer(MainNav) }
}, {
  // Default config for all screens
  headerMode: "none",
  initialRouteName: "LaunchScreen",
  navigationOptions: {
    headerStyle: styles.header
  }
});



export default createAppContainer(PrimaryNav);
