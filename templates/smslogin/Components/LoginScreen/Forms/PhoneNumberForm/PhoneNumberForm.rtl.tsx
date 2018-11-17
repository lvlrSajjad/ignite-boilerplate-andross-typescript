import * as React from "react";
import { View} from "react-native";
import { CardItem} from "native-base";
import {MaterialTextInput,MaterialContainedButton} from 'react-native-typescript-material-ui-collection';
import { primaryColor} from "../../../../Themes/Colors";
import I18n from "../../../../I18n";
import {PhoneNumberFormProps} from "./index";
import styles from "../../Styles";
import Fonts from "../../../../Themes/Fonts";

export default (props: PhoneNumberFormProps) => {
  return (
    <View>
    <CardItem>
      <View style={styles.loginFormPhoneInputContainer}>
        <MaterialTextInput
          inputContainerStyle={{alignItems:'flex-end',justifyContent:'flex-end'}}
          titleTextStyle={{...Fonts.style.input}}
          labelTextStyle={{...Fonts.style.input}}
          containerStyle={{flex:1}}
          prefix={props.prefixNumber}
          isRtl
          label={I18n.t('phoneNumber')}
          value={props.phoneNumber}
          onChangeText={(text) => props.onTextChange(text)}
        />
      </View>
    </CardItem>
    <CardItem>
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
