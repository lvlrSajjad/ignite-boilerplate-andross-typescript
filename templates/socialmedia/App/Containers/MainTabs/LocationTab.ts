import {connect} from "react-redux";
import LocationTabComponent from '../../Components/MainTabs/LocationTabComponent'

const mapStateToProps = state => {
  return {
    isDarkMode:state.appSettings.isDarkMode,
    colorScheme: state.appSettings.colorScheme
  };
};

//const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps,/** mapDispatchToProps*/ null)(LocationTabComponent);
