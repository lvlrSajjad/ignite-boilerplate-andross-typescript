import * as React from 'react'
import {Container, Content} from 'native-base';
import {FlatList} from "react-native";
import {dummyChannelsData} from "../../Fixtures/DummyData";
import ChatsListItem from "../LaunchScreen/ChatsTab/ChatsListItem/index";
import {ColorScheme} from "../../Themes/Colors";

interface ChannelsTabProps {
  isDarkMode?:boolean,
  colorScheme:ColorScheme
}

export default class ChannelsTabComponent extends React.Component<ChannelsTabProps> {

  render() {
    const ColorScheme = this.props.colorScheme;

    return (
      <Container
      style={{backgroundColor:ColorScheme.containersBackground}}
      >
        <Content>
          <FlatList
            data={dummyChannelsData}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => ChannelsTabComponent.renderListItems(item,ColorScheme)}
          />
        </Content>
      </Container>
    );
  }

  static renderListItems(item,ColorScheme) {
    return (
      <ChatsListItem
        colorScheme={ColorScheme}
        avatar={item.avatar}
        name={item.name}
        note={item.note}
        time={item.time}
      />
    )
  }
}
