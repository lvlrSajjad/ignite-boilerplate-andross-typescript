import * as React from "react";
import Rtl from './NavHeaders.rtl';
import Ltr from './NavHeaders.ltr';
import {connect} from "react-redux";
import {ColorScheme} from "../../Themes/Colors";


export interface NavHeadersProps {
isDarkMode?: boolean,
isRtl?:boolean,
colorScheme?:ColorScheme,
  onPress():void,
  title:string
}

export const Direction = (props:NavHeadersProps) => props.isRtl? <Rtl {...props} /> : <Ltr {...props} />;

const mapStateToProps = state => {
return {
isRtl: state.appSettings.isRtl
};
};

export default connect(mapStateToProps)(Direction);
