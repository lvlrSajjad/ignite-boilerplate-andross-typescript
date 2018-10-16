import * as React from 'react'
import { Component } from 'react';
import { Container, Content} from 'native-base';
import {FlatList} from "react-native";
import {dummyCallsData} from "../../../Config/DummyData";
import {connect} from "react-redux";
import CallsListItem from "../../../Components/LaunchScreen/ChatsTab/CallsListItem";
import {colorScheme} from "../../../Themes/Colors";
import {store} from "../../App";

interface CallsScreenProps {
  isDarkMode?:boolean
}

class CallsScreen extends Component<CallsScreenProps> {

render() {
  console.log(store.getState().appSettings);

  const ColorScheme = colorScheme(this.props.isDarkMode);
    return (
      <Container
      style={{backgroundColor:ColorScheme.containersBackground}}
      >
        <Content>
          <FlatList
            data={dummyCallsData}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => CallsScreen.renderListItems(item)}
          />
        </Content>
      </Container>

    );
  }

  static renderListItems (item) {
    return (
      <CallsListItem avatar={item.avatar} name={item.name} state={item.state} time={item.time}/>
    )
  }
}
const mapStateToProps = state => ({
  isDarkMode: state.appSettings.isDarkMode
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CallsScreen);
