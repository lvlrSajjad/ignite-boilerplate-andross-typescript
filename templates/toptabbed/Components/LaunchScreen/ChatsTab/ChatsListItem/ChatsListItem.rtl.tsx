import * as React from "react";
import {ListItem, Left, Body, Right, Thumbnail, Text} from 'native-base';
import Fonts from "../../../../Themes/Fonts";
import {ChatsListItemProps} from "./index";

export default (item : ChatsListItemProps) => {
  const ColorScheme = item.colorScheme;

  return (
    <ListItem button avatar onPress={()=>{item.onPress()}}>
      <Left>
        <Text style ={{fontFamily:Fonts.type.base,color:ColorScheme.lightText}} note>{item.time}</Text>

      </Left>
      <Body  style={{alignItems:'flex-start'}}>
      <Text style ={{alignSelf:'flex-end',fontFamily:Fonts.type.base,color:ColorScheme.fullToneText}}>{item.name}</Text>
      <Text style ={{alignSelf:'flex-end',fontFamily:Fonts.type.base,color:ColorScheme.midToneText}} note>{item.note}</Text>
      </Body>
      <Right>
        <Thumbnail source={{uri: item.avatar}}/>
      </Right>
    </ListItem>
  );
};
