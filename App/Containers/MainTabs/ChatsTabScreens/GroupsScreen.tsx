import * as React from 'react'
import {Component} from 'react';
import {Container, Content} from 'native-base';
import {FlatList} from "react-native";
import {dummyGroupsData} from "../../../Config/DummyData";
import {connect} from "react-redux";
import ChatsListItem from "../../../Components/LaunchScreen/ChatsTab/ChatsListItem";
import {colorScheme} from "../../../Themes/Colors";

interface GroupsScreenProps {
  isDarkMode?:boolean
}

class GroupsScreen extends Component<GroupsScreenProps> {
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
            data={dummyGroupsData}
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
      //  onPress={()=>{this.props.navigation.navigate( 'ChatScreen' );}}
      />
    )
  }
}

const mapStateToProps = state => ({
  isDarkMode: state.isDarkMode.isDarkMode
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(GroupsScreen);
