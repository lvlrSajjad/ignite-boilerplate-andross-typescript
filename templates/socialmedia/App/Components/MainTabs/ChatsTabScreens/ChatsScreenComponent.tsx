import * as React from 'react'
import {Container, Content} from 'native-base';
import {FlatList} from "react-native";
import {dummyChatsData} from "../../../Fixtures/DummyData";
import ChatsListItem from '../../LaunchScreen/ChatsTab/ChatsListItem/index'
import {ColorScheme} from "../../../Themes/Colors";

interface ChatsScreenProps {
  isDarkMode?:boolean,
  colorScheme:ColorScheme,
  ChatScreen?(nav:any):void
}

export default class ChatsScreenComponent extends React.Component<ChatsScreenProps> {
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

         this.props.ChatScreen(this.props.isDarkMode)
        //  this.props.navigation.dispatch(navigateAction);
        }}
      />
    )
  }
}
