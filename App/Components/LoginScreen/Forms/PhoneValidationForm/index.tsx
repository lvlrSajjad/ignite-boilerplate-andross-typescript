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
  isLtr?: boolean
}

export const Direction = (props: PhoneValidationFormProps) => props.isLtr ? <Ltr {...props} /> : <Rtl {...props}/>;

const mapStateToProps = state => {
  return {
    isLtr: state.appSettings.isLtr
  };
};

export default connect(mapStateToProps)(Direction);
