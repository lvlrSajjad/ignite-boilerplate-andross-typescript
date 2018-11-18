import * as React from "react";
import {ListItem, Left, Body, Right, Thumbnail, Text} from 'native-base';
import Fonts from "../../../../Themes/Fonts";
import {ChatsListItemProps} from "./index";

export default (item : ChatsListItemProps) => {
  const ColorScheme = item.colorScheme;

  return (
    <ListItem button avatar onPress={()=>{item.onPress()}}>
      <Left>
        <Thumbnail source={{uri: item.avatar}}/>
      </Left>
      <Body  style={{alignItems:'flex-start'}}>
      <Text style ={{fontFamily:Fonts.type.base,color:ColorScheme.fullToneText}}>{item.name}</Text>
      <Text style ={{fontFamily:Fonts.type.base,color:ColorScheme.midToneText}} note>{item.note}</Text>
      </Body>
      <Right>
        <Text style ={{fontFamily:Fonts.type.base,color:ColorScheme.lightText}} note>{item.time}</Text>
      </Right>
    </ListItem>
);
};
