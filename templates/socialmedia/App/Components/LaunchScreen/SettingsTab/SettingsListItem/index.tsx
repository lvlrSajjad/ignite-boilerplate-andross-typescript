import * as React from "react";
import {ColorScheme} from "../../../../Themes/Colors";
import Ltr from "./SettingsListItem.ltr";
import Rtl from "./SettingsListItem.rtl";

export interface SettingsListItemProps {
  name: string,
  icon: string,
  colorScheme:ColorScheme,
  isRtl:boolean
}

export default (props:SettingsListItemProps) => props.isRtl? <Rtl {...props} /> : <Ltr {...props}/>;
