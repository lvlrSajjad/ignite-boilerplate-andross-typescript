import * as React from "react";
import Rtl from './CallsListItem.rtl';
import Ltr from './CallsListItem.ltr';
import {connect} from "react-redux";
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

export const Direction = (props:CallsListItemProps) => props.isRtl? <Rtl {...props} /> : <Ltr {...props} />;

const mapStateToProps = state => {
  return {
    isRtl: state.appSettings.isRtl
  };
};

export default connect(mapStateToProps)(Direction);
