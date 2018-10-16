import * as React from "react";
import Rtl from './CallsListItem.rtl';
import Ltr from './CallsListItem.ltr';
import {connect} from "react-redux";

const Direction = (props) => props.isLtr? <Ltr {...props} /> : <Rtl {...props} />;

const mapStateToProps = state => {
  return {
    isLtr: state.appSettings.isLtr
  };
};

export default connect(mapStateToProps)(Direction);
