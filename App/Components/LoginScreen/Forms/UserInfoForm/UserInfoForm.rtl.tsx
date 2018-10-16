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
          placeholder={"User Name"}
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

export default connect(mapStateToProps)(UserInfoFormRtl);
