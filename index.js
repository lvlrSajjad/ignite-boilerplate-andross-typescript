import '@babel/polyfill'
import 'core-js/es6/symbol'
import 'core-js/fn/symbol/iterator'
import './App/Config/ReactotronConfig'
import { AppRegistry } from 'react-native'
import App from './App/Containers/App'
console.disableYellowBox = true;
AppRegistry.registerComponent('Bitt', () => App)
