import * as React from "react";
import {ListItem, Left, Body, Right, Thumbnail, Text} from 'native-base';
import Fonts from "../../../Themes/Fonts";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {View} from "react-native";
import {connect} from "react-redux";
import {colorScheme} from "../../../Themes/Colors";

interface CallsListItemProps {
  avatar: string,
  name: string,
  state: number,
  time: string,
  isDarkMode?: boolean
}


interface callData {
  text: string,
  color: string,
  icon: string,
}

function callStateDataChooser (state: number) : callData {
  switch (state){
    case 0 : return {
      text: 'No response',
      color: 'red',
      icon: 'call-missed'
    };
    case 1: return {
      text: 'Successful',
      color: 'green',
      icon: 'call-made'
    };
    case 2: return {
      text: 'Rejected',
      color: 'red',
      icon: 'call-missed-outgoing'
    };
    default: return {
      text: 'Unknown',
      color: 'red',
      icon: 'call-missed-outgoing'
    }
  }
}


const CallListItem = (item : CallsListItemProps) => {

  const callStateData = callStateDataChooser(item.state);
  const ColorScheme = colorScheme(item.isDarkMode);

  return (
    <ListItem button avatar>
      <Left>
        <Thumbnail source={{uri: item.avatar}}/>
      </Left>
      <Body  style={{alignItems:'flex-start'}}>
      <Text style ={{fontFamily:Fonts.type.farsi,color:ColorScheme.fullToneText}}>{item.name}</Text>
      <View style = {{flexDirection:'row'}}>
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
        <Text style ={{fontFamily:Fonts.type.farsi,color:ColorScheme.lightText}} note>{item.time}</Text>
      </Right>
    </ListItem>
);
};

const mapStateToProps = state => {
  return {
    isDarkMode: state.isDarkMode.isDarkMode
  };
};

export default connect(mapStateToProps)(CallListItem);
