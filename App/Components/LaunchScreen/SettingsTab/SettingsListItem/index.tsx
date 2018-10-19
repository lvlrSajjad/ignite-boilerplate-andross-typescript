import Ltr from "./SettingsListItem.ltr";
import Rtl from "./SettingsListItem.rtl";
import {connect} from "react-redux";
import * as React from "react";
import {ColorScheme} from "../../../../Themes/Colors";

export interface SettingsListItemProps {
  name: string,
  icon: string,
  colorScheme:ColorScheme,
  isLtr:boolean
}

const Direction = (props:SettingsListItemProps) => props.isLtr? <Ltr {...props} /> : <Rtl {...props}/>;

const mapStateToProps = state => {
  return {
    isLtr: state.appSettings.isLtr
  };
};

export default connect(mapStateToProps)(Direction);
