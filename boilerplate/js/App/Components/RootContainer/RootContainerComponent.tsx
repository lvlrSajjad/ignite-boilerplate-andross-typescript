import * as React from 'react'
import { Component } from 'react';
import { View, StatusBar } from "react-native";
import ReduxNavigation from "../../Navigation/ReduxNavigation";
import ReduxPersist from "../../Config/ReduxPersist";

// Styles
import styles from "./Styles/RootContainerStyles";

interface RootContainerProps {
  startup(): void,
}

export default class RootContainer extends Component<RootContainerProps> {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    if (!ReduxPersist.active) {
      this.props.startup();
    }
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
