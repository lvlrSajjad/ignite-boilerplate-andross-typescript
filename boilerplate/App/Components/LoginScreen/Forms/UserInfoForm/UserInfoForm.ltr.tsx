import * as React from "react";
import { TextField } from 'react-native-material-textfield';
import {MKColor} from 'react-native-material-kit'
import {Image, View} from "react-native";
import Fonts from "../../../../Themes/Fonts";
import MaterialButton from "../../../MaterialComponents/MaterialButton";
import {primaryColor} from "../../../../Themes/Colors";
import {CardItem} from "native-base";
import I18n from "../../../../I18n";
import {UserInfoFormProps} from "./index";

export default (props: UserInfoFormProps) => {

  return (
    <View style={{alignItems: "center", justifyContent: 'center'}}>
      <CardItem button>
        <Image
          source={{uri: 'https://www.chaarat.com/wp-content/uploads/2017/08/placeholder-user.png'}}
          style={{
            width: 128,
            height: 128,
            borderRadius: 64,
            overflow: 'hidden',
            margin: 32,
            alignSelf: 'center'
          }}
        />

      </CardItem>
      <CardItem>
        <TextField
          titleTextStyle={{...Fonts.style.farsiInput}}
          labelTextStyle={{...Fonts.style.farsiInput}}
          containerStyle={{flex:1}}
          label={I18n.t('userName')}
          value={props.userName}
          onChangeText={(text) => props.onTextChange(text)}        />
      </CardItem>
      <CardItem>
        <View style={{flexDirection: 'row'}}>
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
          <View style={{width: 4}}/>

        </View>
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
      </CardItem>
    </View>
  );
};
