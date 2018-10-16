import * as React from "react";
import Rtl from './RoundedButton.rtl';
import Ltr from './RoundedButton.ltr';
import {connect} from "react-redux";

const Direction = (props) => props.isLtr? <Ltr {...props} /> : <Rtl {...props} />;

const mapStateToProps = state => {
  return {
    isLtr: state.appSettings.isLtr
  };
};

export default connect(mapStateToProps)(Direction);
