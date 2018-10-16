import Ltr from "./PhoneNumberForm.ltr";
import Rtl from "./PhoneNumberForm.rtl";
import {connect} from "react-redux";
import * as React from "react";

const Direction = (props) => props.isLtr ? <Ltr {...props} /> : <Rtl {...props}/>;

const mapStateToProps = state => {
  return {
    isLtr: state.appSettings.isLtr
  };
};

export default connect(mapStateToProps)(Direction);
