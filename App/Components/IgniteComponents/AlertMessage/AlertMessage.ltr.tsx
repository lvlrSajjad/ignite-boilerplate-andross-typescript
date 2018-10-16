import * as React from 'react'
import {Component} from 'react';
import { View, Text } from "react-native";
import styles from "../../Styles/AlertMessageStyles";


interface AlertMessageProps {
  title: string,
  style?: object,
  show?: boolean
}

interface AlertMessageState {}


export default class AlertMessageLtr extends Component<AlertMessageProps,AlertMessageState> {
  public static defaultProps: Partial<AlertMessageProps> = {
    show: true,
    style: {}
  };

  render() {
    const messageComponent = null;
    if (this.props.show) {
      const { title } = this.props;
      return (
        <View
          style={[styles.container, this.props.style]}
        >
          <View style={styles.contentContainer}>
            <Text allowFontScaling={false} style={styles.message}>{title && title.toUpperCase()}</Text>
          </View>
        </View>
      );
    }

    return messageComponent;
  }
}
