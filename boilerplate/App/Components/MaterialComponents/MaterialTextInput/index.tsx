import { TextField } from 'react-native-material-textfield';
import {connect} from "react-redux";
import * as React from "react";
import Fonts from "../../../Themes/Fonts";
import {StyleProp, TextInputProps, TextStyle, ViewStyle} from 'react-native';

export interface TextFieldProps extends TextInputProps{
  animationDuration?: number,

  fontSize?:number,
  titleFontSize?:number,
  labelFontSize?:number,
  labelHeight?:number,
  labelPadding?:number,
  inputContainerPadding?:number,

  labelTextStyle?: StyleProp<TextStyle>,
  titleTextStyle?: StyleProp<TextStyle>,
  affixTextStyle?: StyleProp<TextStyle>,

  tintColor?:string,
  textColor?:string,
  baseColor?:string,

  label:string,
  title?:string,

  characterRestriction?:number,

  error?:string,
  errorColor?:string,

  lineWidth?:number,
  activeLineWidth?:number,

  disabled?:boolean,
  disabledLineType?: {
    'solid', 'dotted', 'dashed', 'none'
  },
  disabledLineWidth?:number,

  renderAccessory?(type:any):void,

  prefix?: string,
  suffix?:string,

  containerStyle: StyleProp<ViewStyle>,
  inputContainerStyle: StyleProp<ViewStyle>,

  isLoading?: boolean,
  isRtl?:boolean
}

export const Direction = (props:TextFieldProps) => props.isRtl ?
  <TextField
    inputContainerStyle={{alignItems:'flex-end',justifyContent:'flex-end'}}
    titleTextStyle={{...Fonts.style.farsiInput}}
    labelTextStyle={{...Fonts.style.farsiInput}}
    {...props}
  />
  :
  <TextField
  titleTextStyle={{...Fonts.style.farsiInput}}
  labelTextStyle={{...Fonts.style.farsiInput}}
  {...props}
/>;

const mapStateToProps = state => {
  return {
    isRtl: state.appSettings.isRtl
  };
};

export default connect(mapStateToProps)(Direction);
