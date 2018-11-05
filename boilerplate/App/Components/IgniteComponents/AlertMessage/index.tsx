import * as React from "react";
import Rtl from './AlertMessage.rtl';
import Ltr from './AlertMessage.ltr';
import {connect} from "react-redux";

export const Direction = (props) => props.isRtl? <Rtl {...props} /> : <Ltr {...props} />;

const mapStateToProps = state => {
  return {
    isRtl: state.appSettings.isRtl
  };
};

export default connect(mapStateToProps)(Direction);
