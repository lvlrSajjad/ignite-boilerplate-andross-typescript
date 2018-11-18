import '../Config/index'
import DebugConfig from '../Config/DebugConfig'
import {Monitor} from "redux-saga";
import {StoreCreator} from "redux";
import App from "../Components/App/AppComponent";

declare global {
  interface Console {
    tron: any,
  }
}
declare module 'reactotron-react-native' {
  export interface Reactotron {
    createSagaMonitor(): Monitor,
    createStore: StoreCreator,
  }
}

//allow reactotron overlay for fast design in dev mode
export default DebugConfig.useReactotron
  ? console.tron.overlay(App)
  : App
//export default App
