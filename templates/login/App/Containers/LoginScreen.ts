import {connect} from "react-redux";
import * as LoginActions from '../Redux/Login/LoginActions';
import LoginScreenComponent from '../Components/LoginScreen/LoginScreenComponent'

const mapStateToProps = state => ({
  colorScheme : state.appSettings.colorScheme,
  userName: state.login.userName,
  password: state.login.password
});

//const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, LoginActions)(LoginScreenComponent);
