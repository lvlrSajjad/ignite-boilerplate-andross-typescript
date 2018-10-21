import Ltr from "./MaterialButton.ltr";
import Rtl from "./MaterialButton.rtl";
import {connect} from "react-redux";
import * as React from "react";

export interface MaterialButtonProps {
  flex?: number,
  color: string,
  fullWidth?: boolean,
  textColor: string,
  text: string,
  isLoading: boolean,
  onPress():void,
  isLtr:boolean
}


export const Direction = (props) => props.isLtr ? <Ltr {...props} /> : <Rtl {...props}/>;

const mapStateToProps = state => {
  return {
    isLtr: state.appSettings.isLtr
  };
};

export default connect(mapStateToProps)(Direction);
