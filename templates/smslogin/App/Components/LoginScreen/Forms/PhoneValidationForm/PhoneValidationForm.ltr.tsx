import * as React from "react";
import { View} from "react-native";
import { CardItem} from "native-base";
import {MaterialTextInput,MaterialContainedButton,MaterialTextButton} from 'react-native-typescript-material-ui-collection';
import {primaryColor} from "../../../../Themes/Colors";
import I18n from "../../../../I18n";
import {PhoneValidationFormProps} from "./index";
import Fonts from "../../../../Themes/Fonts";

export default (props : PhoneValidationFormProps) => {

  return (
    <View>
    <CardItem>
      <MaterialTextInput
        titleTextStyle={{...Fonts.style.input}}
        labelTextStyle={{...Fonts.style.input}}
        containerStyle={{flex:1}}
        label={I18n.t('verificationNumber')}
        value={props.varCode}
        onChangeText={(text) => props.onTextChange(text)}
      />
    </CardItem>
    <CardItem style={{justifyContent:'flex-end'}}>
      <View style={{flexDirection: 'row'}}>
        < MaterialTextButton
          text={I18n.t('back')}
          textColor={primaryColor}
          progress={false}
          //flex={1}
          onPress={() => {
            props.onBackButtonPress()
          }}
        />
        <View style={{width: 4}}/>
        <MaterialContainedButton
          onPress={() => {
            props.onPress(props.varCode)
          }}
          color={primaryColor}
          text={I18n.t('confirm')}
          textColor="white"
          progress={props.isLoading}
        />
    </View>

    </CardItem>
    </View>
  );
};
