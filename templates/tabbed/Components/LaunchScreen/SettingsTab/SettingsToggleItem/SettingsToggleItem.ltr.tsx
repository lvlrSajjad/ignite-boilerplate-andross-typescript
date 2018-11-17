import * as React from "react";
import {Row, Text, CardItem, Body, Switch} from 'native-base';
import Fonts from "../../../../Themes/Fonts";
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {SettingsToggleItemProps} from "./index";

export default (item: SettingsToggleItemProps) => {
  return (
    <CardItem>
      <Body>
      <Row>
        <Row style={{alignItems:'center',justifyContent:'center'}}>
          <MaterialIcons
            name={item.icon}
            size={28}
            style={{margin: 8}}
            color={'#424242'}
          />
          <Text style={{fontFamily: Fonts.type.base, color: '#424242',flex:1}}>{item.name}</Text>
        </Row>
        <Switch
          value={item.value}
          onValueChange={item.onValueChange}
        />
      </Row>
      </Body>
    </CardItem>
)
  ;
}
