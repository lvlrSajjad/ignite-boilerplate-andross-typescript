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
  isLtr?:boolean,
  colorScheme?:ColorScheme
}

const Direction = (props:CallsListItemProps) => props.isLtr? <Ltr {...props} /> : <Rtl {...props} />;

const mapStateToProps = state => {
  return {
    isLtr: state.appSettings.isLtr
  };
};

export default connect(mapStateToProps)(Direction);
