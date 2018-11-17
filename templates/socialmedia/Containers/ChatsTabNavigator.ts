/* eslint react/prop-types: 0 */
import {connect} from "react-redux";
import ChatsTabNavigator from '../Components/ChatsTabNavigator'

const mapStateToProps = state => ({
  isDarkMode: state.appSettings.isDarkMode,
  isRtl:state.appSettings.isRtl,
  colorScheme: state.appSettings.colorScheme
});

export default connect(mapStateToProps)(ChatsTabNavigator);
