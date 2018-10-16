import * as React from "react";
import { Row, Text, CardItem} from 'native-base';
import Fonts from "../../../Themes/Fonts";
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ColorScheme} from "../../../Themes/Colors";


interface SettingsListItemProps {
  name: string,
  icon: string,
  // onPress(): void,
  colorScheme:ColorScheme
}

export default (item: SettingsListItemProps) => {
  return (
    <CardItem button bordered>
      <Row style={{alignItems:'center',justifyContent:'center'}}>


        <MaterialIcons
          name={item.icon}
          size={28}
          style={{margin: 8}}
          color={'#424242'}
        />
        <Text style={{fontFamily: Fonts.type.farsi, color: '#424242',flex:1}}>{item.name}</Text>
      </Row>

    </CardItem>
  )
    ;
}
