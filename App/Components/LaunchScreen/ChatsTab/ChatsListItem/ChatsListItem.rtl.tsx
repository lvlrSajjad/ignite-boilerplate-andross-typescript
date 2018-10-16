import * as React from "react";
import {ListItem, Left, Body, Right, Thumbnail, Text} from 'native-base';
import Fonts from "../../../../Themes/Fonts";
import {connect} from "react-redux";
import {colorScheme} from "../../../../Themes/Colors";


interface ChatsListItemProps {
  avatar: string,
  name: string,
  note: string,
  time: string,
  isDarkMode?: boolean,
  onPress():void
}

const ChatListItem = (item : ChatsListItemProps) => {
  const ColorScheme = colorScheme(item.isDarkMode);

  return (
    <ListItem button avatar onPress={()=>{item.onPress()}}>
      <Left>
        <Thumbnail source={{uri: item.avatar}}/>
      </Left>
      <Body  style={{alignItems:'flex-start'}}>
      <Text style ={{fontFamily:Fonts.type.farsi,color:ColorScheme.fullToneText}}>{item.name}</Text>
      <Text style ={{fontFamily:Fonts.type.farsi,color:ColorScheme.midToneText}} note>{item.note}</Text>
      </Body>
      <Right>
        <Text style ={{fontFamily:Fonts.type.farsi,color:ColorScheme.lightText}} note>{item.time}</Text>
      </Right>
    </ListItem>
);
};
const mapStateToProps = state => {
  return {
    isDarkMode: state.appSettings.isDarkMode
  };
};

export default connect(mapStateToProps)(ChatListItem);
