import * as React from "react";
import Rtl from './FullButton.rtl';
import Ltr from './FullButton.ltr';
import {connect} from "react-redux";

export const Direction = (props) => props.isRtl? <Rtl {...props} /> : <Ltr {...props} />;

const mapStateToProps = state => {
  return {
    isRtl: state.appSettings.isRtl
  };
};

export default connect(mapStateToProps)(Direction);
