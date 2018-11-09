import * as React from 'react';
import {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native'
import styles from './Styles/NavHeadersStyle.ltr'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {NavHeadersProps} from "./index";

export default class NavHeaders extends Component<NavHeadersProps> {

  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    return (
      <View style={styles.container}>
        <TouchableOpacity
        onPress={this.props.onPress}
        >
          <MaterialIcons
            color='white'
            name='menu'
            size={28}
          />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={{color:'white'}}>{this.props.title}</Text>
        </View>
      </View>
    )
  }
}
