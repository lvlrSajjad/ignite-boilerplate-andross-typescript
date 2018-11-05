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
  isRtl:boolean
}


export const Direction = (props) => props.isRtl ? <Rtl {...props} /> : <Ltr {...props}/>;

const mapStateToProps = state => {
  return {
    isRtl: state.appSettings.isRtl
  };
};

export default connect(mapStateToProps)(Direction);
