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

export const Direction = (props: PhoneValidationFormProps) => props.isRtl ? <Rtl {...props} /> : <Ltr {...props}/>;

const mapStateToProps = state => {
  return {
    isRtl: state.appSettings.isRtl
  };
};

export default connect(mapStateToProps)(Direction);
