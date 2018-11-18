import {connect} from "react-redux";
import ChannelsTabComponent from '../../Components/MainTabs/ChannelsTabComponent'


const mapStateToProps = state => ({
  isDarkMode: state.appSettings.isDarkMode,
  colorScheme: state.appSettings.colorScheme
});

//const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, /**mapDispatchToProps*/ null)(ChannelsTabComponent);
