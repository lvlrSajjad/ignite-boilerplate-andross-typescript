import { Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

// Used via Metrics.baseMargin
const metrics = {
  marginHorizontal: 10,
  marginVertical: 10,
  section: 25,
  baseMargin: 10,
  doubleBaseMargin: 20,
  smallMargin: 5,
  doubleSection: 50,
  horizontalLineHeight: 1,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: (Platform.OS === "ios") ? 64 : 54,
  buttonRadius: 4,
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200
  },
  materialButton: {
    paddingLeft:16,
    paddingRight: 16,
    height:36,
    borderRadius:2
  },
  regularMaterialFab: {
    size:56,
    padding:16,
    iconSize:24,
  },
  miniMaterialFab: {
    size:40,
    padding:8,
    iconSize:24,
  },
  materialTwoLineListItem: {
    height:72,
    padding:16,
    avatarSize:40,

  }
};

export default metrics;
