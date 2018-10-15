import * as React from 'react'
import {Component} from 'react';
import {connect} from "react-redux";
import * as Actions from '../../Redux/Actions/IsDarkModeActions';
import {colorScheme} from "../../Themes/Colors";
import {BottomTabBar} from 'react-navigation-tabs';
import Fonts from "../../Themes/Fonts";

class MaterialBottomTabBar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const ColorScheme = colorScheme(this.props.isDarkMode);

    return (
      <BottomTabBar
        labelStyle={{
          fontSize: 10,
          fontFamily: Fonts.type.farsi,
          color: ColorScheme.midToneText
        }}
        style={{
          backgroundColor: ColorScheme.fullToneBackground,
        }}/>
    );
  }
}

const mapStateToProps = state => {
  return {
    isDarkMode: state.isDarkMode.isDarkMode
  };
};

// const mapDispatchToProps = dispatch => ({
//
// });

export default connect(mapStateToProps, Actions)(MaterialBottomTabBar);
