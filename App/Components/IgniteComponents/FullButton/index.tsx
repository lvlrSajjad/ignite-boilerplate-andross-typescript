import * as React from "react";
import Rtl from './FullButton.rtl';
import Ltr from './FullButton.ltr';
import {connect} from "react-redux";

export const Direction = (props) => props.isLtr? <Ltr {...props} /> : <Rtl {...props} />;

const mapStateToProps = state => {
  return {
    isLtr: state.appSettings.isLtr
  };
};

export default connect(mapStateToProps)(Direction);
