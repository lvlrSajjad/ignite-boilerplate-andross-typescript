import * as React from "react";
import {
    ScrollView, Text, Image, View
} from "react-native";
import styles from "../../Containers/Styles/LaunchScreenStyles";
import {Images} from "../../Themes";
import NavHeaders from "../NavHeaders/index";

export interface ExampleCompponentProps {
title:string,
    onMenuButtonClicked?():void
}

export default (props:ExampleCompponentProps) => <View style={styles.mainContainer}>
    <Image source={Images.background} style={styles.backgroundImage} resizeMode="stretch" />
    <NavHeaders
        onPress={()=>{props.onMenuButtonClicked()}}
        title={props.title}
    />
    <ScrollView style={styles.container}>
        <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
        </View>
        <View style={styles.section}>
            <Image source={Images.ready} />
            <Text style={styles.sectionText}>
                {props.title}
            </Text>
        </View>

    </ScrollView>
</View>;
