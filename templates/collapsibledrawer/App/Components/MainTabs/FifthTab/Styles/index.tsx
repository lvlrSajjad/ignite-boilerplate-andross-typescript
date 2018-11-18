import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles } from "../../../../Themes";
/** @type {{search: React.CSSProperties}} */
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  }
});
