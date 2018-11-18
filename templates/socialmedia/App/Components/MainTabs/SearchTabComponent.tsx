import * as React from 'react'
import {Images} from "../../Themes";
import {
  ScrollView, Text, Image, View
} from "react-native";
import styles from "./Styles/index";

export default class SearchTabComponent extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode="stretch" />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>
          <View style={styles.section}>
            <Image source={Images.ready} />
            <Text style={styles.sectionText}>
              MapTab.
            </Text>
          </View>

        </ScrollView>
      </View>
    );
  }
}
