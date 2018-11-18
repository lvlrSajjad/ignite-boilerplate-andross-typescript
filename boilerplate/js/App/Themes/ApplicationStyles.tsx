import Fonts from "./Fonts";
import Metrics from "./Metrics";
import Colors from "./Colors";
import {TextStyle} from "react-native";

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
  screen: {
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.transparent
    },
    backgroundImage: {
      position: "absolute" as "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    },
    avatar: {
      width:128,
      height:128,
      borderRadius:64,
      overflow:'hidden' as 'hidden',
      margin:32,
      alignSelf:'center' as 'center'
    },
    container: {
      flex: 1,
      paddingTop: Metrics.baseMargin,
      backgroundColor: Colors.transparent
    },
    section: {
      margin: Metrics.section,
      padding: Metrics.baseMargin
    },
    sectionText: {
      ...Fonts.style.normal,
      paddingVertical: Metrics.doubleBaseMargin,
      color: Colors.snow,
      marginVertical: Metrics.smallMargin,
      textAlign: "center"
    } as TextStyle,
    subtitle: {
      color: Colors.snow,
      padding: Metrics.smallMargin,
      marginBottom: Metrics.smallMargin,
      marginHorizontal: Metrics.smallMargin
    },
    titleText: {
      ...Fonts.style.h2,
      fontSize: 14,
      color: Colors.text
    } as TextStyle
  },
  darkLabelContainer: {
    padding: Metrics.smallMargin,
    paddingBottom: Metrics.doubleBaseMargin,
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
    marginBottom: Metrics.baseMargin
  },
  darkLabel: {
    fontFamily: Fonts.type.bold,
    color: Colors.snow
  },
  groupContainer: {
    margin: Metrics.smallMargin,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center" as 'center'
  },
  materialButton:{
    paddingLeft: 16,
    paddingRight: 16,
    height: 16,
    alignItems: 'center' as 'center',
    justifyContent: 'center' as 'center'
  },
  materialFarsiText:{
    ...Fonts.style.normal
  },
  sectionTitle: {
    ...Fonts.style.h4,
    color: Colors.coal,
    backgroundColor: Colors.ricePaper,
    padding: Metrics.smallMargin,
    marginTop: Metrics.smallMargin,
    marginHorizontal: Metrics.baseMargin,
    borderWidth: 1,
    borderColor: Colors.ember,
    alignItems: "center" as 'center',
    textAlign: "center" as 'center'
  }
};

export default ApplicationStyles;
