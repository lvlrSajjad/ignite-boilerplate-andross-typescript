import Ltr from "./UserInfoForm.ltr";
import Rtl from "./UserInfoForm.rtl";
import {connect} from "react-redux";
import * as React from "react";

export interface UserInfoFormProps {
  userName: string,
  onTextChange(text: string): void,
  onBackButtonPress(): void,
  isLoading: boolean,
  isDarkMode?: boolean,
  onPress(): void,
  isLtr: boolean
}

const Direction = (props:UserInfoFormProps) => props.isLtr ? <Ltr {...props} /> : <Rtl {...props}/>;

const mapStateToProps = state => {
  return {
    isLtr: state.appSettings.isLtr
  };
};

export default connect(mapStateToProps)(Direction);
