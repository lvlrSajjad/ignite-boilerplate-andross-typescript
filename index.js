import "@babel/polyfill";
import "core-js/es6/symbol";
import "core-js/fn/symbol/iterator";
import "./App/Config/ReactotronConfig"
import { AppRegistry } from "react-native";
import App from "./App/Containers/App";

//console.disableYellowBox = true;
const ReactNative = require("react-native");


try {
  ReactNative.I18nManager.allowRTL(false); // Because We Using Our Custom Rtl
} catch (e) {
  console.log(e);
}

AppRegistry.registerComponent("TypescriptedBoilerplate", () => App);
