import * as React from "react";
import styles from "../../Styles/LoginCardStyles";
import { View} from "react-native";
import Fonts from "../../../../Themes/Fonts";
import { CardItem} from "native-base";
import MaterialButton from "../../../MaterialComponents/MaterialButton";
import { primaryColor} from "../../../../Themes/Colors";
import I18n from "../../../../I18n";
import {PhoneNumberFormProps} from "./index";
import { TextField } from 'react-native-material-textfield';

export default (props: PhoneNumberFormProps) => {
  return (
    <View>
    <CardItem>
      <View style={styles.loginFormPhoneInputContainer}>
        <TextField
          titleTextStyle={{...Fonts.style.farsiInput}}
          labelTextStyle={{...Fonts.style.farsiInput}}
          containerStyle={{flex:1}}
          prefix={props.prefixNumber}
          label={I18n.t('phoneNumber')}
          value={props.phoneNumber}
          onChangeText={(text) => props.onTextChange(text)}
        />
      </View>
    </CardItem>
    <CardItem>
      <MaterialButton
        text={I18n.t('confirm')}
        color={primaryColor}
        textColor='white'
        isLoading={props.isLoading}
        fullWidth={true}
        flex={1}
        onPress={() => {
          props.onPress();
        }}
      />
    </CardItem>
    </View>
  );
};
