import * as React from "react";
import {Image, View} from "react-native";
import {CardItem} from "native-base";
import I18n from "../../../../I18n";
import {UserInfoFormProps} from "./index";
import Fonts from "../../../../Themes/Fonts";
import {
  MaterialTextInput,
  MaterialContainedButton,
  MaterialTextButton
} from 'react-native-typescript-material-ui-collection';
import {primaryColor} from "../../../../Themes/Colors";

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
          inputContainerStyle={{alignItems: 'flex-end', justifyContent: 'flex-end'}}
          titleTextStyle={{...Fonts.style.input}}
          labelTextStyle={{...Fonts.style.input}}
          containerStyle={{flex: 1}}
          label={I18n.t('userName')}
          value={props.userName}
          onChangeText={(text) => props.onTextChange(text)}
        />
      </CardItem>
      <CardItem>
        <View style={{flexDirection: 'row'}}>
          <MaterialContainedButton
            text={I18n.t('confirm')}
            color={primaryColor}
            textColor='white'
            progress={props.isLoading}
            onPress={() => {
              props.onPress()
            }}
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
