import * as React from "react";
import Rtl from './NavHeaders.rtl';
import Ltr from './NavHeaders.ltr';
import {ColorScheme} from "../../Themes/Colors";


export interface NavHeadersProps {
isDarkMode?: boolean,
isRtl?:boolean,
colorScheme?:ColorScheme,
  onPress():void,
  title:string
}

export default (props:NavHeadersProps) => props.isRtl? <Rtl {...props} /> : <Ltr {...props} />;
