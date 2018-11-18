import {connect} from "react-redux";
import * as LoginActions from '../Redux/Login/LoginActions';
import LoginScreenComponent from '../Components/LoginScreen/LoginScreenComponent';

const mapStateToProps = state => ({
  colorScheme : state.appSettings.colorScheme,
  step: state.login.step,
  phoneNumber: state.login.phoneNumber,
  varCode: state.login.varCode,
  prefixNumber: state.login.prefixNumber,
  userName: state.login.userName,
  isRtl: state.appSettings.isRtl
});

//const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, LoginActions)(LoginScreenComponent);
