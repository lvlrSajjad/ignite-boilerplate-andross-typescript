import * as React from 'react'
import {Component} from 'react';
import {TouchableOpacity, Text} from "react-native";
import styles from "../../Styles/FullButtonStyles";
import ExamplesRegistry from "../../../Services/ExamplesRegistry";

// Note that this file (App/Components/FullButton) needs to be
// imported in your app somewhere, otherwise your component won't be
// compiled and added to the examples dev screen.

// Ignore in coverage report
/* istanbul ignore next */
ExamplesRegistry.addComponentExample("Full Button", () => (
  <FullButtonLtr
    text="Hey there"
    onPress={() => window.alert("Full Button Pressed!")}
  />
));

interface FullButtonProps {
  text: string,

  onPress(event: any): void,

  styles?: object

}

interface FullButtonState {

}

export default class FullButtonLtr extends Component<FullButtonProps, FullButtonState> {
  public static defaultProps: Partial<FullButtonProps> = {
    styles: {}
  };
  render() {
    return (
      <TouchableOpacity style={[styles.button, this.props.styles]} onPress={this.props.onPress}>
        <Text style={styles.buttonText} >{this.props.text && this.props.text.toUpperCase()}</Text>
      </TouchableOpacity>
    );
  }
}
