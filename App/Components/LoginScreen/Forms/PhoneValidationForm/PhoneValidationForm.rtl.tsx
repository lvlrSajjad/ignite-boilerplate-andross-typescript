import * as React from "react";
import {MKTextField} from 'react-native-material-kit';
import styles from "../../Styles/LoginCardStyles";
import {MKColor} from 'react-native-material-kit'
import { View} from "react-native";
import Fonts from "../../../../Themes/Fonts";
import { CardItem} from "native-base";
import MaterialButton from "../../../MaterialComponents/MaterialButton";
import {connect} from 'react-redux'
import {primaryColor} from "../../../../Themes/Colors";

interface PhoneValidationFormProps {
  primaryColor: string,
  onTextChange(text:string): void,
  varCode: string,
  isLoading?: boolean,
  onPress(): void,
  isDarkMode: boolean,
  onBackButtonPress(): void
}

const PhoneValidationFormLtr = (props : PhoneValidationFormProps) => {

  return (
    <View>
    <CardItem>
      <MKTextField
        tintColor={primaryColor}
        textInputStyle={styles.loginFormTextInput}
        floatingLabelFont={{...Fonts.style.farsiInput}}
        placeholder={"Sms Code"}
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
          text={'Back'}
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
        text={'Confirm'}
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
const mapStateToProps = state => {
  return {
    isDarkMode: state.appSettings.isDarkMode
  };
};

export default connect(mapStateToProps)(PhoneValidationFormLtr);
