import * as React from 'react'
import { Container, Content} from 'native-base';
import {FlatList} from "react-native";
import {dummyCallsData} from "../../../Fixtures/DummyData";
import CallsListItem from "../../LaunchScreen/ChatsTab/CallsListItem/index";
import {ColorScheme} from "../../../Themes/Colors";

interface CallsScreenProps {
  isDarkMode?:boolean,
  colorScheme:ColorScheme
}

export default class CallsScreenComponent extends React.Component<CallsScreenProps> {


render() {
    const colorScheme = this.props.colorScheme;
  return (
      <Container
      style={{backgroundColor:colorScheme.containersBackground}}
      >
        <Content>
          <FlatList
            data={dummyCallsData}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => CallsScreenComponent.renderListItems(item,colorScheme)}
          />
        </Content>
      </Container>

    );
  }

  static renderListItems (item,colorScheme) {
    return (
      <CallsListItem colorScheme={colorScheme} avatar={item.avatar} name={item.name} state={item.state} time={item.time}/>
    )
  }
}
