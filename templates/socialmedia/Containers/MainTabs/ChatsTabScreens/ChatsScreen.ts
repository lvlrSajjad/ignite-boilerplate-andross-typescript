import {connect} from "react-redux";
import { withNavigation } from 'react-navigation';
import ChatsScreenComponent from '../../../Components/MainTabs/ChatsTabScreens/ChatsScreenComponent'

const mapStateToProps = state => ({
  isDarkMode: state.appSettings.isDarkMode,
  nav: state.nav,
  colorScheme: state.appSettings.colorScheme
});

const mapDispatchToProps = dispatch => ({
   ChatScreen: (darkMode) => {
     dispatch({ type: 'ChatScreen' , payload : darkMode});
   },
});

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(ChatsScreenComponent));
