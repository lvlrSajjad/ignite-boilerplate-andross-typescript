import * as React from 'react'
import {Component} from 'react';
import {connect} from "react-redux";
import {Container, Content} from 'native-base';
import {FlatList} from "react-native";
import {dummyChannelsData} from "../../Fixtures/DummyData";
import ChatsListItem from "../../Components/LaunchScreen/ChatsTab/ChatsListItem";
import {ColorScheme} from "../../Themes/Colors";

interface ChannelsTabProps {
  isDarkMode?:boolean,
  colorScheme?:ColorScheme
}

class ChannelsTab extends Component<ChannelsTabProps> {

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
            renderItem={({item}) => ChannelsTab.renderListItems(item,ColorScheme)}
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

const mapStateToProps = state => ({
  isDarkMode: state.appSettings.isDarkMode,
  colorScheme: state.appSettings.colorScheme
});

//const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, /**mapDispatchToProps*/ null)(ChannelsTab);
