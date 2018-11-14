import * as React from 'react'
import {Component} from 'react';
import {Image, ScrollView, View} from "react-native";
import {connect} from "react-redux";
import styles from "../Styles/LaunchScreenStyles";
import { Card, Text} from "native-base";
import metrics from "../../Themes/Metrics";
import * as Actions from '../../Redux/AppSettings/AppSettingsAction';
import SettingsToggleItem from "../../Components/LaunchScreen/SettingsTab/SettingsToggleItem/index";
import I18n from '../../I18n';
import {ColorScheme} from "../../Themes/Colors";

interface SettingsTabProps {
    isRtl?:boolean,
    isDarkMode?:boolean,
    toggleDarkMode():void,
    toggleDirection():void,
    selectLocale(local:string):void,
    locale: string,
    colorScheme: ColorScheme
}

class SettingsTab extends Component<SettingsTabProps> {

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
                            value = {this.props.isDarkMode}
                            onValueChange={() => {
                                this.props.toggleDarkMode()
                            }}
                            name ={I18n.t('darkMode')}
                            icon = 'weather-night'
                            colorScheme={ColorScheme}
                        />
                        <SettingsToggleItem
                            value = {this.props.isRtl}
                            onValueChange={() => {
                                this.props.toggleDirection()
                            }}
                            name ={I18n.t('rtl')}
                            icon = 'format-textdirection-r-to-l'
                            colorScheme={ColorScheme}
                        />
                        <SettingsToggleItem
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

const mapStateToProps = state => {
    return {
        isDarkMode: state.appSettings.isDarkMode,
        isRtl: state.appSettings.isRtl,
        colorScheme: state.appSettings.colorScheme,
        locale: state.appSettings.locale
    };
};

// const mapDispatchToProps = dispatch => ({
//
// });

export default connect(mapStateToProps, Actions)(SettingsTab);
