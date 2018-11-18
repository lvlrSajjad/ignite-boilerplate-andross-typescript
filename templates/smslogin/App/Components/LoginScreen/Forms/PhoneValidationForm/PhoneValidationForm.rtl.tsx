import * as React from "react";
import {View} from "react-native";
import {CardItem} from "native-base";
import {PhoneValidationFormProps} from "./index";
import styles from "../../Styles";
import Fonts from "../../../../Themes/Fonts";
import {
  MaterialTextInput,
  MaterialContainedButton,
  MaterialTextButton
} from 'react-native-typescript-material-ui-collection';
import {primaryColor} from "../../../../Themes/Colors";
import I18n from "../../../../I18n";

export default (props: PhoneValidationFormProps) => {

  return (
    <View>
      <CardItem>
        <View style={styles.loginFormPhoneInputContainer}>
          <MaterialTextInput
            inputContainerStyle={{alignItems: 'flex-end', justifyContent: 'flex-end'}}
            titleTextStyle={{...Fonts.style.input}}
            labelTextStyle={{...Fonts.style.input}}
            containerStyle={{flex: 1}}
            label={I18n.t('verificationNumber')}
            value={props.varCode}
            onChangeText={(text) => props.onTextChange(text)}
          />
        </View>
      </CardItem>
      <CardItem>
        <View style={{flexDirection: 'row'}}>
          <MaterialContainedButton
            onPress={() => {
              props.onPress(props.varCode)
            }}
            color={primaryColor}
            text={I18n.t('confirm')}
            textColor="white"
            progress={props.isLoading}
          />
          <View style={{width: 4}}/>
          < MaterialTextButton
            text={I18n.t('back')}
            textColor={primaryColor}
            progress={false}
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
