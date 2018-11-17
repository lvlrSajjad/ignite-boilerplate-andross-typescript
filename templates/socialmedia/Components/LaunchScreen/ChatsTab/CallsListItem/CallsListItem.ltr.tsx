import * as React from "react";
import {ListItem, Left, Body, Right, Thumbnail, Text} from 'native-base';
import Fonts from "../../../../Themes/Fonts";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {View} from "react-native";
import CallStateToData from "../../../../Transforms/CallStateToData";
import {CallsListItemProps} from './index';

export default (item : CallsListItemProps) => {

  const callStateData = CallStateToData(item.state);
  const ColorScheme = item.colorScheme;

  return (
    <ListItem button avatar>
      <Left>
        <Thumbnail source={{uri: item.avatar}}/>
      </Left>
      <Body  style={{alignItems:'flex-start'}}>
      <Text style ={{fontFamily:Fonts.type.base,color:ColorScheme.fullToneText}}>{item.name}</Text>
      <View style = {{flexDirection:'row'}}>
        <MaterialIcons
          name={callStateData.icon}
          size={28}
          style={{marginBottom: -3}}
          color={ callStateData.color}
        />
        <Text style ={{fontFamily:Fonts.type.base,color:ColorScheme.midToneText}} note>{callStateData.text}</Text>
      </View>
      </Body>
      <Right>
        <Text style ={{fontFamily:Fonts.type.base,color:ColorScheme.lightText}} note>{item.time}</Text>
      </Right>
    </ListItem>
);
};
