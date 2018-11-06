import { createStackNavigator } from "react-navigation";
import styles from "./Styles/NavigationStyles";
import LaunchScreen from "../Containers/LaunchScreen";
import LoginScreen from "../Containers/LoginScreen";

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  LoginScreen: { screen: LoginScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: "none",
  initialRouteName: "LoginScreen",
  navigationOptions: {
    headerStyle: styles.header
  }
});



export default PrimaryNav;
