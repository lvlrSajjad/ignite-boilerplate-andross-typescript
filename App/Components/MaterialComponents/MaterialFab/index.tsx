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
  isLtr?:boolean
}

export const Direction = (props:MaterialFabProps) => props.isLtr ? <Ltr {...props} /> : <Rtl {...props}/>;

const mapStateToProps = state => {
  return {
    isLtr: state.appSettings.isLtr
  };
};

export default connect(mapStateToProps)(Direction);
