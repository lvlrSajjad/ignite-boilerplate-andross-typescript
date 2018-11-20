import * as React from 'react'
import {Container, Content} from 'native-base';
import {FlatList} from "react-native";
import ChatsListItem from '../../LaunchScreen/ChatsTab/ChatsListItem/index';
import {ColorScheme} from "../../../Themes/Colors";
import {dummyGroupsData} from "../../../Fixtures/DummyData";

interface GroupsScreenProps {
  isDarkMode?:boolean,
  colorScheme:ColorScheme
}

export default class GroupsScreenComponent extends React.Component<GroupsScreenProps> {
  constructor(props){
    super (props);
    this.renderListItems = this.renderListItems.bind(this);
  }
  render() {
    const colorScheme = this.props.colorScheme;
    return (
      <Container
        style={{backgroundColor:colorScheme.containersBackground}}
      >
        <Content>
          <FlatList
            data={dummyGroupsData}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => this.renderListItems(item,colorScheme)}
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
      //  onPress={()=>{this.props.navigation.navigate( 'ChatScreen' );}}
      />
    )
  }
}
