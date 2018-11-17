import Ltr from "./PhoneValidationForm.ltr";
import Rtl from "./PhoneValidationForm.rtl";
import {connect} from "react-redux";
import * as React from "react";

export interface PhoneValidationFormProps {
  onTextChange?(text:string): void,
  varCode: string,
  isLoading?: boolean,
  onPress?(varCode:string): void,
  isDarkMode?: boolean,
  onBackButtonPress?(): void,
  isRtl?: boolean
}

export default (props: PhoneValidationFormProps) => props.isRtl ? <Rtl {...props} /> : <Ltr {...props}/>;
