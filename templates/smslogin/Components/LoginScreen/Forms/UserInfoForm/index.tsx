import Ltr from "./UserInfoForm.ltr";
import Rtl from "./UserInfoForm.rtl";
import {connect} from "react-redux";
import * as React from "react";

export interface UserInfoFormProps {
  userName: string,
  onTextChange?(text: string): void,
  onBackButtonPress?(): void,
  isLoading?: boolean,
  isDarkMode?: boolean,
  onPress?(): void,
  isRtl?: boolean
}

export default (props:UserInfoFormProps) => props.isRtl ? <Rtl {...props} /> : <Ltr {...props}/>;
