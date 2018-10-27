import * as React from "react";
import {TextField} from 'react-native-material-textfield';
import {MKColor} from 'react-native-material-kit'
import {View} from "react-native";
import Fonts from "../../../../Themes/Fonts";
import {CardItem} from "native-base";
import MaterialButton from "../../../MaterialComponents/MaterialButton";
import {primaryColor} from "../../../../Themes/Colors";
import I18n from "../../../../I18n";
import {PhoneValidationFormProps} from "./index";
import styles from "../../Styles/LoginCardStyles";

export default (props: PhoneValidationFormProps) => {

  return (
    <View>
      <CardItem>
        <View style={styles.loginFormPhoneInputContainer}>
          <TextField
            inputContainerStyle={{alignItems:'flex-end',justifyContent:'flex-end'}}
            titleTextStyle={{...Fonts.style.farsiInput}}
            labelTextStyle={{...Fonts.style.farsiInput}}
            containerStyle={{flex: 1}}
            label={I18n.t('verificationNumber')}
            value={props.varCode}
            onChangeText={(text) => props.onTextChange(text)}
          />
        </View>
      </CardItem>
      <CardItem>
        <View style={{flexDirection: 'row'}}>
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
          <View style={{width: 4}}/>
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

        </View>


      </CardItem>
    </View>
  );
};
