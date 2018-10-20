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
  isLtr:boolean
}

export const Direction = (props:SettingsToggleItemProps) => props.isLtr? <Ltr {...props} /> : <Rtl {...props}/>;

const mapStateToProps = state => {
  return {
    isLtr: state.appSettings.isLtr
  };
};

export default connect(mapStateToProps)(Direction);
