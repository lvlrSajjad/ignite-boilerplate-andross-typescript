import * as React from 'react'
import {Component} from 'react';
import {connect} from "react-redux";
import {Container, Content} from 'native-base';
import {FlatList} from "react-native";
import {dummyChatsData} from "../../Fixtures/DummyData";
import ChatsListItem from '../../Components/LaunchScreen/ChatsTab/ChatsListItem'
import {ColorScheme} from "../../Themes/Colors";
import { withNavigation } from 'react-navigation';

interface ChatsScreenProps {
  isDarkMode?:boolean,
  colorScheme?:ColorScheme
}

class ChatsScreen extends Component<ChatsScreenProps> {
  constructor(props){
    super (props);
    this.renderListItems = this.renderListItems.bind(this);
  }
  render() {
    const ColorScheme = this.props.colorScheme;

    return (
      <Container
        style={{backgroundColor:ColorScheme.containersBackground}}
      >
        <Content>
          <FlatList
            data={dummyChatsData}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => this.renderListItems(item,ColorScheme)}
          />
        </Content>
      </Container>
    );
  }

  renderListItems = (item,ColorScheme) => {
    return (
      <ChatsListItem
        colorScheme={ColorScheme}
        avatar={item.avatar}
        name={item.name}
        note={item.note}
        time={item.time}
        onPress={()=>{

        // this.props.ChatScreen(this.props.isDarkMode)
        //  this.props.navigation.dispatch(navigateAction);
        }}
      />
    )
  }
}

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

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(ChatsScreen));
