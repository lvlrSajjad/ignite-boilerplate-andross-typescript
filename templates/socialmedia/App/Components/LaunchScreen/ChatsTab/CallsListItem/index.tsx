import * as React from "react";
import {ColorScheme} from "../../../../Themes/Colors";
import Rtl from './CallsListItem.rtl';
import Ltr from './CallsListItem.ltr';


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
