import Ltr from "./PhoneNumberForm.ltr";
import Rtl from "./PhoneNumberForm.rtl";
import {connect} from "react-redux";
import * as React from "react";

export interface PhoneNumberFormProps {
  prefixNumber: string,
  primaryColor: string,
  onTextChange?(text:string): void,
  phoneNumber: string,
  isLoading?: boolean,
  onPress?(): void,
  isDarkMode?: boolean,
  isRtl?: boolean
}

export const Direction = (props:PhoneNumberFormProps) => props.isRtl ? <Rtl {...props} /> : <Ltr {...props}/>;

const mapStateToProps = state => {
  return {
    isRtl: state.appSettings.isLtr
  };
};

export default connect(mapStateToProps)(Direction);
