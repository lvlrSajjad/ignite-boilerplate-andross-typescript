import Ltr from "./ChatsListItem.ltr";
import Rtl from "./ChatsListItem.rtl";
import {connect} from "react-redux";
import * as React from "react";
import {ColorScheme} from "../../../../Themes/Colors";

export interface ChatsListItemProps {
  avatar: string,
  name: string,
  note: string,
  time: string,
  isDarkMode?: boolean,
  onPress?():void,
  isLtr:boolean,
  colorScheme:ColorScheme
}

export const Direction = (props:ChatsListItemProps) => props.isLtr ? <Ltr {...props} /> : <Rtl {...props}/>;

const mapStateToProps = state => {
  return {
    isLtr: state.appSettings.isLtr
  };
};

export default connect(mapStateToProps)(Direction);
