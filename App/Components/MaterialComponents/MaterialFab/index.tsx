import Ltr from "./MaterialFab.ltr";
import Rtl from "./MaterialFab.rtl";
import {connect} from "react-redux";
import * as React from "react";

export interface MaterialFabProps {
  size: number,
  color: string,
  onPress?(): void,
  iconColor: string,
  icon: string,
  isLoading?: boolean,
  isRtl?:boolean
}

export const Direction = (props:MaterialFabProps) => props.isRtl ? <Rtl {...props} /> : <Ltr {...props}/>;

const mapStateToProps = state => {
  return {
    isRtl: state.appSettings.isRtl
  };
};

export default connect(mapStateToProps)(Direction);
