import * as React from "react";
import {MKTextField} from 'react-native-material-kit';
import styles from "../../Styles/LoginCardStyles";
import {MKColor} from 'react-native-material-kit'
import {Image, View} from "react-native";
import Fonts from "../../../../Themes/Fonts";
import {connect} from 'react-redux'
import MaterialButton from "../../../MaterialComponents/MaterialButton";
import  {primaryColor} from "../../../../Themes/Colors";
import {CardItem} from "native-base";
import I18n from "../../../../I18n";

interface UserInfoFormProps {
  userName: string,

  onTextChange(text: string): void,

  onBackButtonPress(): void,

  isLoading: boolean,
  isDarkMode?: boolean,

  onPress(): void
}

const UserInfoFormRtl = (props: UserInfoFormProps) => {

  return (
    <View style={{alignItems: "center", justifyContent: 'center'}}>
      <CardItem button>
      <Image source={{uri: 'https://www.chaarat.com/wp-content/uploads/2017/08/placeholder-user.png'}}
             style={styles.avatar}/>

      </CardItem>
      <CardItem>
        <MKTextField
          tintColor={primaryColor}
          textInputStyle={styles.loginFormTextInput}
          floatingLabelFont={{...Fonts.style.farsiInput}}
          placeholder={I18n.t('userName')}
          onTextChange={(text) => props.onTextChange(text)}
          text={props.userName}
          maxLength={6}
          floatingLabelEnabled
          keyboardType={'numeric'}
          highlightColor={primaryColor}
          style={{width: '100%'}}
        />
      </CardItem>
      <CardItem>
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
        <View style={{flexDirection: 'row'}}>
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
const mapStateToProps = state => {
  return {
    isDarkMode: state.appSettings.isDarkMode
  };
};

export default connect(mapStateToProps)(UserInfoFormRtl);
