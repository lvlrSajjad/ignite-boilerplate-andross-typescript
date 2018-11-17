import * as React from "react";
import {View} from "react-native";
import {CardItem} from "native-base";
import {TextField} from 'react-native-material-textfield';
import styles from "../../Styles";
import Fonts from "../../../../Themes/Fonts";
import MaterialButton from "../../../MaterialComponents/MaterialButton";
import {primaryColor} from "../../../../Themes/Colors";
import I18n from "../../../../I18n";
import {PhoneNumberFormProps} from "./index";

export default (props: PhoneNumberFormProps) => {
  return (
    <View>
      <CardItem>
        <View style={styles.loginFormPhoneInputContainer}>
          <TextField
            titleTextStyle={{...Fonts.style.input}}
            labelTextStyle={{...Fonts.style.input}}
            containerStyle={{flex: 1}}
            label={I18n.t('userName')}
            value={props.userName}
            onChangeText={(text) => props.onTextChangeUserName(text)}
          />
        </View>
      </CardItem>
      <CardItem>
        <View style={styles.loginFormPhoneInputContainer}>
          <TextField
            titleTextStyle={{...Fonts.style.input}}
            labelTextStyle={{...Fonts.style.input}}
            containerStyle={{flex: 1}}
            label={I18n.t('password')}
            value={props.password}
            onChangeText={(text) => props.onTextChangePasword(text)}
          />
        </View>
      </CardItem>
      <CardItem>
        <MaterialButton
          text={I18n.t('login')}
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
