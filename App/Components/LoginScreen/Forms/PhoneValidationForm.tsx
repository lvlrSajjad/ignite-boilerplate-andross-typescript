import * as React from "react";
import Textfield from '../../MaterialComponents/TextfieldRtl';
import styles from "../Styles/LoginCardStyles";
import {MKColor} from 'react-native-material-kit'
import { View} from "react-native";
import Fonts from "../../../Themes/Fonts";
import { CardItem} from "native-base";
import MaterialButton from "../../MaterialComponents/MaterialButton";
import {connect} from 'react-redux'
import {primaryColor} from "../../../Themes/Colors";

interface PhoneValidationFormProps {
  primaryColor: string,
  onTextChange(text:string): void,
  varCode: string,
  isLoading?: boolean,
  onPress(): void,
  isDarkMode: boolean,
  onBackButtonPress(): void
}

const PhoneValidationForm = (props : PhoneValidationFormProps) => {

  return (
    <View>
    <CardItem>
      <Textfield
        tintColor={primaryColor}
        textInputStyle={styles.loginFormTextInput}
        floatingLabelFont={{...Fonts.style.farsiInput}}
        placeholder={"کد 6 رقمی"}
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
      <MaterialButton
        text={'تایید'}
        color={primaryColor}
        textColor='white'
        isLoading={props.isLoading}
        flex={1}
        onPress={() => {
          props.onPress()
        }}
      />
      <View style={{flexDirection: 'row'}}>
        <View style={{width: 4}}/>
        < MaterialButton
          text={'بازگشت'}
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
const mapStateToProps = state => {
  return {
    isDarkMode: state.isDarkMode.isDarkMode
  };
};

export default connect(mapStateToProps)(PhoneValidationForm);
