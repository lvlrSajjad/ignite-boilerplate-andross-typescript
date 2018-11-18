import * as React from "react";
import Rtl from './CallsListItem.rtl';
import Ltr from './CallsListItem.ltr';
import {ColorScheme} from "../../../../Themes/Colors";


export interface CallsListItemProps {
  avatar: string,
  name: string,
  state: number,
  time: string,
  isDarkMode?: boolean,
  isRtl?:boolean,
  colorScheme?:ColorScheme
}

export default (props:CallsListItemProps) => props.isRtl? <Rtl {...props} /> : <Ltr {...props} />;
