import * as React from 'react'
import {Component} from 'react';
import { TouchableOpacity, Text } from "react-native";
import styles from "../../Styles/RoundedButtonStyles";
import ExamplesRegistry from "../../../Services/ExamplesRegistry";

// Note that this file (App/Components/RoundedButton) needs to be
// imported in your app somewhere, otherwise your component won't be
// compiled and added to the examples dev screen.

// Ignore in coverage report
/* istanbul ignore next */
ExamplesRegistry.addComponentExample("Rounded Button", () => (
  <RoundedButton
    text="real buttons have curves"
    onPress={() => window.alert("Rounded Button Pressed!")}
  />
));

interface RoundedButtonProps {
  onPress?(event: any): void,
  text?: string,
  children?: string,
  navigator?: object

}

interface RoundedButtonState {

}

export default class RoundedButton extends Component<RoundedButtonProps,RoundedButtonState> {

  getText() {
    const buttonText = this.props.text || this.props.children || "";
    return buttonText.toUpperCase();
  }

  render() {
    return (
      <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.getText()}</Text>
      </TouchableOpacity>
    );
  }
}
