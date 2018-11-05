import {mdl,MKButton} from 'react-native-material-kit';
import {Text} from "react-native";
import * as React from "react";
import metrics from "../../../Themes/Metrics";
import Fonts from "../../../Themes/Fonts";
import {MaterialButtonProps} from "./index";

export default (props : MaterialButtonProps) => {
  return (
    <MKButton
      backgroundColor={props.color}
      height={42}
      borderRadius={2}
      justifyContent={'center'}
      flex={props.flex? props.flex:undefined}
      width={props.fullWidth? '100%': undefined}
      alignItems={'center'}
      paddingLeft={metrics.materialButton.paddingLeft}
      paddingRight={metrics.materialButton.paddingRight}
      shadowRadius={metrics.materialButton.borderRadius}
      shadowOffset={{width: 0, height: 2}}
      shadowOpacity={.7}
      shadowColor="black"
      onPress={props.onPress}
    >
      {props.isLoading ?
        <mdl.Spinner
          strokeColor={props.textColor}
          style={{width:18,height:18}}
        />
        :
        <Text style={{...Fonts.style.farsiNormal, color: props.textColor, alignSelf: 'center', fontSize: 18}}>
          {props.text}
        </Text>
      }
    </MKButton>
  )
}
