import * as React from "react";
import {MKColor} from 'react-native-material-kit'
import { View} from "react-native";
import { CardItem} from "native-base";
import { TextField } from 'react-native-material-textfield';
import MaterialButton from "../../../MaterialComponents/MaterialButton";
import {primaryColor} from "../../../../Themes/Colors";
import I18n from "../../../../I18n";
import {PhoneValidationFormProps} from "./index";
import Fonts from "../../../../Themes/Fonts";

export default (props : PhoneValidationFormProps) => {

  return (
    <View>
    <CardItem>
      <TextField
        titleTextStyle={{...Fonts.style.farsiInput}}
        labelTextStyle={{...Fonts.style.farsiInput}}
        containerStyle={{flex:1}}
        label={I18n.t('verificationNumber')}
        value={props.varCode}
        onChangeText={(text) => props.onTextChange(text)}
      />
    </CardItem>
    <CardItem>
      <View style={{flexDirection: 'row'}}>
        < MaterialButton
          text={I18n.t('back')}
          color={MKColor.Grey}
          textColor='white'
          isLoading={false}
          //flex={1}
          onPress={() => {
            props.onBackButtonPress()
          }}
        />
        <View style={{width: 4}}/>
      </View>
      <MaterialButton
        text={I18n.t('confirm')}
        color={primaryColor}
        textColor='white'
        isLoading={props.isLoading}
        flex={1}
        onPress={() => {
          props.onPress(props.varCode)
        }}
      />

    </CardItem>
    </View>
  );
};
