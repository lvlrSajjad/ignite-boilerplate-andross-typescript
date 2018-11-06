import { StyleSheet } from "react-native";
import { ApplicationStyles } from "../../Themes";

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  loginForm: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16
  },
  loginFormCardView: {
    width: "100%"
  }
});
