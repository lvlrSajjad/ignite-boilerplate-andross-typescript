import {connect} from "react-redux";
import LaunchScreenNavigator from '../Components/LaunchScreen/LaunchScreenNavigator'

const mapStateToProps = state => {
  return {
    isDarkMode: state.appSettings.isDarkMode,
    isRtl: state.appSettings.isRtl,
    colorScheme: state.appSettings.colorScheme
  };
};


export default connect(mapStateToProps)(LaunchScreenNavigator);
