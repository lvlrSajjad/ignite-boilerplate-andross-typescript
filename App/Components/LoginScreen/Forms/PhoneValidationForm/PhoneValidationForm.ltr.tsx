import * as React from "react";
import {MKTextField} from 'react-native-material-kit';
import styles from "../../Styles/LoginCardStyles";
import {MKColor} from 'react-native-material-kit'
import { View} from "react-native";
import Fonts from "../../../../Themes/Fonts";
import { CardItem} from "native-base";
import MaterialButton from "../../../MaterialComponents/MaterialButton";
import {primaryColor} from "../../../../Themes/Colors";
import I18n from "../../../../I18n";
import {PhoneValidationFormProps} from "./index";

export default (props : PhoneValidationFormProps) => {

  return (
    <View>
    <CardItem>
      <MKTextField
        tintColor={primaryColor}
        textInputStyle={styles.loginFormTextInput}
        floatingLabelFont={{...Fonts.style.farsiInput}}
        placeholder={I18n.t('verificationNumber')}
        onTextChange={(text) => props.onTextChange(text)}
        text={props.varCode}
        maxLength={6}
        floatingLabelEnabled
        keyboardType={'numeric'}
        highlightColor={primaryColor}
        style={{width: '100%'}}
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
          props.onPress()
        }}
      />

    </CardItem>
    </View>
  );
};
