import * as React from 'react'
import { Component } from 'react';
import { Container, Content} from 'native-base';
import {FlatList} from "react-native";
import CallsListItem from "../LaunchScreen/ChatsTab/CallsListItem/index";
import {ColorScheme} from "../../Themes/Colors";
import {dummyCallsData} from "../../Fixtures/DummyData";

interface CallsScreenProps {
  isDarkMode?:boolean,
  colorScheme?:ColorScheme,
  isRtl?:boolean
}

export default class CallsScreenComponent extends Component<CallsScreenProps> {


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
            renderItem={({item}) => this.renderListItems(item,colorScheme)}
          />
        </Content>
      </Container>

    );
  }

  renderListItems = (item,colorScheme) => {
    return (
      <CallsListItem isRtl={this.props.isRtl} colorScheme={colorScheme} avatar={item.avatar} name={item.name} state={item.state} time={item.time}/>
    )
  }
}
