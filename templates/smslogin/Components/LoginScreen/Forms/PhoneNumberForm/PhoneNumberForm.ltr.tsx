import * as React from "react";
import { View} from "react-native";
import { CardItem} from "native-base";
import {PhoneNumberFormProps} from "./index";
import styles from "../../Styles";
import Fonts from "../../../../Themes/Fonts";
import {MaterialTextInput,MaterialContainedButton} from 'react-native-typescript-material-ui-collection';
import { primaryColor} from "../../../../Themes/Colors";
import I18n from "../../../../I18n";

export default (props: PhoneNumberFormProps) => {
  return (
    <View>
    <CardItem>
      <View style={styles.loginFormPhoneInputContainer}>
        <MaterialTextInput
          titleTextStyle={{...Fonts.style.input}}
          labelTextStyle={{...Fonts.style.input}}
          containerStyle={{flex:1}}
          prefix={props.prefixNumber}
          label={I18n.t('phoneNumber')}
          value={props.phoneNumber}
          onChangeText={(text) => props.onTextChange(text)}
        />
      </View>
    </CardItem>
    <CardItem style={{justifyContent:'flex-end'}}>
      <MaterialContainedButton
        onPress={() => {
          props.onPress();
        }}
        color={primaryColor}
        text={I18n.t('confirm')}
        textColor="white"
        progress={props.isLoading}
      />
    </CardItem>
    </View>
  );
};
