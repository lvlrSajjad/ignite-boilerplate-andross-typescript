import * as React from 'react'
import {Component} from 'react';
import {connect} from "react-redux";
import {Container, Content} from 'native-base';
import {FlatList} from "react-native";
import {dummyChatsData} from "../../../Config/DummyData";
import ChatsListItem from '../../../Components/LaunchScreen/ChatsTab/ChatsListItem'
import {colorScheme} from "../../../Themes/Colors";
import { NavigationActions, withNavigation } from 'react-navigation';


class ChatsScreen extends Component {
  constructor(props){
    super (props);
    this.renderListItems = this.renderListItems.bind(this);
  }
  render() {
    const ColorScheme = colorScheme(this.props.isDarkMode);

    return (
      <Container
        style={{backgroundColor:ColorScheme.containersBackground}}
      >
        <Content>
          <FlatList
            data={dummyChatsData}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => this.renderListItems(item)}
          />
        </Content>
      </Container>
    );
  }

  renderListItems = (item) => {
    return (
      <ChatsListItem
        avatar={item.avatar}
        name={item.name}
        note={item.note}
        time={item.time}
        onPress={()=>{

  //        this.props.ChatScreen(this.props.isDarkMode)
        //  this.props.navigation.dispatch(navigateAction);
        }}
      />
    )
  }
}

const mapStateToProps = state => ({
  isDarkMode: state.isDarkMode.isDarkMode,
  nav: state.nav
});

const mapDispatchToProps = dispatch => ({
  // ChatScreen: (darkMode) => {
  //   dispatch({ type: 'ChatScreen' , payload : darkMode});
  // },
});

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(ChatsScreen));
