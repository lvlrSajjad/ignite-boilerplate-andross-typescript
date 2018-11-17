import {connect} from "react-redux";
import GroupsScreenComponent from '../../../Components/MainTabs/ChatsTabScreens/GroupsScreenComponent'

const mapStateToProps = state => ({
  isDarkMode: state.appSettings.isDarkMode,
  colorScheme: state.appSettings.colorScheme
});

//const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, /**mapDispatchToProps*/ null)(GroupsScreenComponent);
