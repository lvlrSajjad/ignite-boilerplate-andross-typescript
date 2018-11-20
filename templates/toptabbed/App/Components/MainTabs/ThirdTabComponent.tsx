import * as React from 'react'
import { Component } from 'react';
import {FlatList} from "react-native";
import { Container, Content} from 'native-base';
import {ColorScheme} from "../../Themes/Colors";
import {dummyCallsData} from "../../Fixtures/DummyData";
import CallsListItem from "../LaunchScreen/ChatsTab/CallsListItem/index";

interface ThirdTabComponentProps {
  isDarkMode?:boolean,
  colorScheme:ColorScheme,
  isRtl?:boolean
}

export default class ThirdTabComponent extends Component<ThirdTabComponentProps> {


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
