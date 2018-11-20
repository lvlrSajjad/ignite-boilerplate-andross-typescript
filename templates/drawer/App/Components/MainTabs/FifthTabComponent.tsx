import * as React from 'react'
import {Component} from 'react';
import { ScrollView, View } from "react-native";
import { Card } from "native-base";
import metrics from "../../Themes/Metrics";
import SettingsToggleItem from "../LaunchScreen/SettingsTab/SettingsToggleItem/index";
import I18n from '../../I18n';
import {ColorScheme} from "../../Themes/Colors";
import styles from "./Styles/index";

interface FifthTabComponentProps {
    isRtl?:boolean,
    isDarkMode?:boolean,
    toggleDarkMode?():void,
    toggleDirection?():void,
    selectLocale?(local:string):void,
    locale: string,
    colorScheme: ColorScheme
}

export default class FifthTabComponent extends Component<FifthTabComponentProps> {

    constructor(props) {
        super(props);
    }

    render() {
        const ColorScheme = this.props.colorScheme;

        return (
            <View style={{
                flex: 1,
                backgroundColor: ColorScheme.containersBackground
            }}>
                <ScrollView style={styles.container}>
                    <Card style={{
                        alignSelf: 'center',
                        alignItems: 'flex-end',
                        justifyContent: 'flex-end',
                        width: metrics.screenWidth - 32
                    }}>
                        <SettingsToggleItem
                            isRtl={this.props.isRtl}
                            value = {this.props.isDarkMode}
                            onValueChange={() => {
                                this.props.toggleDarkMode()
                            }}
                            name ={I18n.t('darkMode')}
                            icon = 'weather-night'
                            colorScheme={ColorScheme}
                        />
                        <SettingsToggleItem
                            isRtl={this.props.isRtl}
                            value = {this.props.isRtl}
                            onValueChange={() => {
                                this.props.toggleDirection()
                            }}
                            name ={I18n.t('rtl')}
                            icon = 'format-textdirection-r-to-l'
                            colorScheme={ColorScheme}
                        />
                        <SettingsToggleItem
                            isRtl={this.props.isRtl}
                            value = {this.props.locale === 'fa'}
                            onValueChange={(value) => {
                                this.props.selectLocale(value ? 'fa': 'en');
                            }}
                            name ={I18n.t('translate')}
                            icon = 'translate'
                            colorScheme={ColorScheme}
                        />
                    </Card>
                </ScrollView>
            </View>
        );
    }
}
