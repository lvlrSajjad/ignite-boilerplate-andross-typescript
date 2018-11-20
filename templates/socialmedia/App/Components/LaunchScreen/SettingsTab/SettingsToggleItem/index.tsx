import * as React from "react";
import {ColorScheme} from "../../../../Themes/Colors";
import Ltr from "./SettingsToggleItem.ltr";
import Rtl from "./SettingsToggleItem.rtl";

export interface SettingsToggleItemProps {
  name: string,
  icon: string,
  value: boolean,
  onValueChange?(value:any): void,
  // onPress(): void,
  colorScheme:ColorScheme,
  isRtl:boolean
}

export default (props:SettingsToggleItemProps) => props.isRtl? <Rtl {...props} /> : <Ltr {...props}/>;
