import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles } from "../../../Themes/index";
/** @type {{search: React.CSSProperties}} */
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  settingsContainer: {
    padding:Metrics.baseMargin
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: "contain" as 'contain'
  },
  centered: {
    alignItems: "center" as 'center'
  }
});
