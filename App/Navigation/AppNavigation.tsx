import { createStackNavigator } from "react-navigation";
import styles from "./Styles/NavigationStyles";
import MainTabNavigator from "./MainTabNavigator";
import LoginScreen from "../Containers/LoginScreen";

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  LoginScreen: { screen: LoginScreen },
  LaunchScreen: { screen: MainTabNavigator }
}, {
  // Default config for all screens
  headerMode: "none",
  initialRouteName: "LoginScreen",
  navigationOptions: {
    headerStyle: styles.header
  }
});



export default PrimaryNav;
