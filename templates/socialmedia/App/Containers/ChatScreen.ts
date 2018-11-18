import {connect} from 'react-redux'
import ChatScreen from '../Components/ChatScreen/ChatScreen'

const mapStateToProps = (state) => {
    return {
        //  isDarkMode: state.isDarkMode.isDarkMode
        colorScheme: state.appSettings.colorScheme
    }
};

const mapDispatchToProps = dispatch => ({
    LaunchScreen: (darkMode) => {
        dispatch({type: 'LaunchScreen', payload: darkMode});
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatScreen)
