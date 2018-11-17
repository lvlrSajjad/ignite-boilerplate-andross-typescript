import * as React from "react";
import { Row, Text, CardItem} from 'native-base';
import Fonts from "../../../../Themes/Fonts";
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {SettingsListItemProps} from "./index";


export default (item: SettingsListItemProps) => {
  return (
    <CardItem button bordered>
      <Row style={{alignItems:'center',justifyContent:'center'}}>

        <Text style={{fontFamily: Fonts.type.base, color: '#424242',flex:1}}>{item.name}</Text>

        <MaterialIcons
          name={item.icon}
          size={28}
          style={{margin: 8}}
          color={'#424242'}
        />
      </Row>

    </CardItem>
  )
    ;
}
