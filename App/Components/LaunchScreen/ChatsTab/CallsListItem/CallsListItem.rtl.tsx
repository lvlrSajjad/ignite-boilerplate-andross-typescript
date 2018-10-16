import * as React from "react";
import {ListItem, Left, Body, Right, Thumbnail, Text} from 'native-base';
import Fonts from "../../../../Themes/Fonts";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {View} from "react-native";
import {connect} from "react-redux";
import CallStateToData from "../../../../Transforms/CallStateToData";

interface CallsListItemProps {
  avatar: string,
  name: string,
  state: number,
  time: string,
  isDarkMode?: boolean
}

const CallListItem = (item : CallsListItemProps) => {

  const callStateData = CallStateToData(item.state);
  const ColorScheme = item.colorScheme;

  return (
    <ListItem button avatar>
      <Left>
        <Text style ={{fontFamily:Fonts.type.farsi,color:ColorScheme.lightText}} note>{item.time}</Text>
      </Left>
      <Body  style={{alignItems:'flex-start'}}>
      <Text style ={{alignSelf:'flex-end',fontFamily:Fonts.type.farsi,color:ColorScheme.fullToneText}}>{item.name}</Text>
      <View style = {{alignSelf:'flex-end',flexDirection:'row'}}>
        <MaterialIcons
          name={callStateData.icon}
          size={28}
          style={{marginBottom: -3}}
          color={ callStateData.color}
        />
        <Text style ={{fontFamily:Fonts.type.farsi,color:ColorScheme.midToneText}} note>{callStateData.text}</Text>
      </View>
      </Body>
      <Right>
        <Thumbnail source={{uri: item.avatar}}/>
      </Right>
    </ListItem>
  );
};

const mapStateToProps = state => {
  return {
    isDarkMode: state.appSettings.isDarkMode,
    colorScheme: state.appSettings.colorScheme
  };
};

export default connect(mapStateToProps)(CallListItem);
