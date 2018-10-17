import * as React from 'react'
import { Component } from 'react';
import { View, StatusBar } from "react-native";
import { connect } from "react-redux";
import ReduxNavigation from "../Navigation/ReduxNavigation";
import StartupActions from "../Redux/StartupRedux";
import ReduxPersist from "../Config/ReduxPersist";
import I18n from 'react-native-i18n';

// Styles
import styles from "./Styles/RootContainerStyles";

interface RootContainerProps {
  startup(): void,
  local?: any
}

class RootContainer extends Component<RootContainerProps> {
  componentDidMount() {
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.startup();
    }
    I18n.locale = this.props.local;
  }

  render() {
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle="light-content" />
        <ReduxNavigation />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    local:state.appSettings.local
  };
};

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = dispatch => ({
  startup: () => dispatch(StartupActions.startup())
});

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
