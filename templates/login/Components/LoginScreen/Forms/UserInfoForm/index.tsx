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

export const Direction = (props:UserInfoFormProps) => props.isRtl ? <Rtl {...props} /> : <Ltr {...props}/>;

const mapStateToProps = state => {
  return {
    isRtl: state.appSettings.isRtl
  };
};

export default connect(mapStateToProps)(Direction);
