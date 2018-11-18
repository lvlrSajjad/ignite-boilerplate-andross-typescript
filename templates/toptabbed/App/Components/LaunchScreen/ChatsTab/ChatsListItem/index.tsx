import * as React from "react";
import {ColorScheme} from "../../../../Themes/Colors";
import Ltr from "./ChatsListItem.ltr";
import Rtl from "./ChatsListItem.rtl";

export interface ChatsListItemProps {
  avatar: string,
  name: string,
  note: string,
  time: string,
  isDarkMode?: boolean,
  onPress?():void,
  isRtl?:boolean,
  colorScheme:ColorScheme
}

export default (props:ChatsListItemProps) => props.isRtl ? <Rtl {...props} /> : <Ltr {...props}/>;
