import * as React from "react";
import Rtl from './DrawerButton.rtl';
import Ltr from './DrawerButton.ltr';
import {connect} from "react-redux";

export const Direction = (props) => props.isRtl? <Rtl {...props} /> : <Ltr {...props} />;

const mapStateToProps = state => {
  return {
    isRtl: state.appSettings.isRtl
  };
};

export default connect(mapStateToProps)(Direction);
