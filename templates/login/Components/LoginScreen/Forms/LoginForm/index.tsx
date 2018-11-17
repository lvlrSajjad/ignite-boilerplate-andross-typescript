import * as React from "react";
import Ltr from "./LoginForm.ltr";
import Rtl from "./LoginForm.rtl";

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

export default (props:PhoneNumberFormProps) => props.isRtl ? <Rtl {...props} /> : <Ltr {...props}/>;
