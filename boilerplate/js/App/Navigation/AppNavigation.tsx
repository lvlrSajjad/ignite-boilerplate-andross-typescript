import { createSwitchNavigator, createStackNavigator } from "react-navigation";
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
  LaunchScreen: { screen: MainNav }
}, {
  // Default config for all screens
  headerMode: "none",
  initialRouteName: "LaunchScreen",
  navigationOptions: {
    headerStyle: styles.header
  }
});



export default PrimaryNav;
