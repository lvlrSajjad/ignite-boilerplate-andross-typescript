import * as React from "react";
import {Image, View} from "react-native";
import Fonts from "../../../../Themes/Fonts";
import {
  MaterialTextInput,
  MaterialContainedButton,
  MaterialTextButton
} from 'react-native-typescript-material-ui-collection';
import {primaryColor} from "../../../../Themes/Colors";
import {CardItem} from "native-base";
import I18n from "../../../../I18n";
import {UserInfoFormProps} from "./index";

export default (props: UserInfoFormProps) => {

  return (
    <View>
      <CardItem button>
        <View style={{width:'100%',alignItems:'center',justifyContent:'center'}}>
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
        </View>
      </CardItem>
      <CardItem>
        <MaterialTextInput
          titleTextStyle={{...Fonts.style.input}}
          labelTextStyle={{...Fonts.style.input}}
          containerStyle={{flex: 1}}
          label={I18n.t('userName')}
          value={props.userName}
          onChangeText={(text) => props.onTextChange(text)}/>
      </CardItem>
      <CardItem style={{justifyContent:'flex-end'}}>
        <View style={{flexDirection: 'row'}}>
          < MaterialTextButton
            text={I18n.t('back')}
            textColor={primaryColor}
            progress={false}
            //flex={1}
            onPress={() => {
              props.onBackButtonPress()
            }}
          />
          <View style={{width: 4}}/>
          <MaterialContainedButton
            text={I18n.t('confirm')}
            color={primaryColor}
            textColor='white'
            progress={props.isLoading}
            onPress={() => {
              props.onPress()
            }}
          />
        </View>
      </CardItem>
    </View>
  );
};
