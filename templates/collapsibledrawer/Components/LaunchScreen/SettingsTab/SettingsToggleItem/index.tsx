import Ltr from "./SettingsToggleItem.ltr";
import Rtl from "./SettingsToggleItem.rtl";
import {connect} from "react-redux";
import * as React from "react";
import {ColorScheme} from "../../../../Themes/Colors";

export interface SettingsToggleItemProps {
  name: string,
  icon: string,
  value: boolean,
  onValueChange?(): void,
  // onPress(): void,
  colorScheme:ColorScheme,
  isRtl:boolean
}

export const Direction = (props:SettingsToggleItemProps) => props.isRtl? <Rtl {...props} /> : <Ltr {...props}/>;

const mapStateToProps = state => {
  return {
    isRtl: state.appSettings.isRtl
  };
};

export default connect(mapStateToProps)(Direction);
