import {connect} from "react-redux";
import CallsScreenComponent from '../../../Components/MainTabs/ChatsTabScreens/CallsScreenComponent'

const mapStateToProps = state => ({
  isDarkMode: state.appSettings.isDarkMode,
  colorScheme: state.appSettings.colorScheme
});

//const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, /**mapDispatchToProps*/ null)(CallsScreenComponent);
