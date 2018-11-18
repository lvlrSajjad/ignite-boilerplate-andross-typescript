import Ltr from "./SettingsListItem.ltr";
import Rtl from "./SettingsListItem.rtl";
import {connect} from "react-redux";
import * as React from "react";
import {ColorScheme} from "../../../../Themes/Colors";

export interface SettingsListItemProps {
  name: string,
  icon: string,
  colorScheme:ColorScheme,
  isRtl:boolean
}

export const Direction = (props:SettingsListItemProps) => props.isRtl? <Rtl {...props} /> : <Ltr {...props}/>;

const mapStateToProps = state => {
  return {
    isRtl: state.appSettings.isRtl
  };
};

export default connect(mapStateToProps)(Direction);
