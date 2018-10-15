import { createStackNavigator } from "react-navigation";
import ChatScreen from "../Containers/ChatScreen";
import styles from "./Styles/NavigationStyles";
import MainTabNavigator from "./MainTabNavigator";
import LoginScreen from "../Containers/LoginScreen";

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  LoginScreen: { screen: LoginScreen },
  LaunchScreen: { screen: MainTabNavigator },
  ChatScreen: {screen:ChatScreen}
}, {
  // Default config for all screens
  headerMode: "none",
  initialRouteName: "LoginScreen",
  navigationOptions: {
    headerStyle: styles.header
  }
});



export default PrimaryNav;
