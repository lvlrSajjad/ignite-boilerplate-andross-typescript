import Ltr from "./LoginForm.ltr";
import Rtl from "./LoginForm.rtl";
import {connect} from "react-redux";
import * as React from "react";

export interface PhoneNumberFormProps {
  primaryColor: string,
  onTextChangeUserName?(text:string): void,
  onTextChangePasword?(text:string): void,
  userName: string,
  password: string,
  isLoading?: boolean,
  onPress?(): void,
  isDarkMode?: boolean,
  isRtl?: boolean
}

export const Direction = (props:PhoneNumberFormProps) => props.isRtl ? <Rtl {...props} /> : <Ltr {...props}/>;

const mapStateToProps = state => {
  return {
    isRtl: state.appSettings.isRtl
  };
};

export default connect(mapStateToProps)(Direction);
