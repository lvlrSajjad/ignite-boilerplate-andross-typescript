import * as React from 'react'
import {Component} from 'react';
import { Text, TouchableOpacity } from "react-native";
import styles from "../../Styles/DrawerButtonStyles";
import ExamplesRegistry from "../../../Services/ExamplesRegistry";

// Note that this file (App/Components/DrawerButton) needs to be
// imported in your app somewhere, otherwise your component won't be
// compiled and added to the examples dev screen.

// Ignore in coverage report
/* istanbul ignore next */
ExamplesRegistry.addComponentExample("Drawer Button", () => (
  <DrawerButton
    text="Example left drawer button"
    onPress={() => window.alert("Your drawers are showing")}
  />
));

interface DrawerButtonProps {
  text: string,
  onPress (event: any): void
}

interface DrawerButtonState {

}

class DrawerButton extends Component <DrawerButtonProps,DrawerButtonState> {

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Text style={styles.text}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

export default DrawerButton;
