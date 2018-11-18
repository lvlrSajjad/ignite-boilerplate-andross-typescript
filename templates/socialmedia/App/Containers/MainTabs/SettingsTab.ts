import {connect} from "react-redux";
import * as Actions from '../../Redux/AppSettings/AppSettingsAction';
import SettingsTabComponent from '../../Components/MainTabs/SettingsTabComponent'

const mapStateToProps = state => {
  return {
    isDarkMode: state.appSettings.isDarkMode,
    isRtl: state.appSettings.isRtl,
    colorScheme: state.appSettings.colorScheme,
    locale: state.appSettings.locale
  };
};

// const mapDispatchToProps = dispatch => ({
//
// });

export default connect(mapStateToProps, Actions)(SettingsTabComponent);
