/* eslint react/prop-types: 0 */
import * as React from 'react';
import FirstTab from './MainTabs/FirstTab';
import SecondTab from './MainTabs/SecondTab';
import ThirdTab from './MainTabs/ThirdTab';
import FourthTab from './MainTabs/FourthTab';
import FifthTab from './MainTabs/FifthTab';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import {connect} from "react-redux";
import {DrawerItems, createDrawerNavigator } from 'react-navigation';
import metrics from "../Themes/Metrics";

const CustomDrawerContentComponent = (props) => <ScrollView>
    <SafeAreaView style={styles.container} forceInset={{top: 'always', horizontal: 'never'}}>
        <View>
            {/*Todo Here you can put some header to your drawer*/}
        </View>
        <DrawerItems {...props}
                     renderIcon={(x) =><MaterialIcons
                         color={x.tintColor}
                         name={chooseIcon(x.index)}
                         size={28}
                         style={{marginBottom: -3}}
                     />}
        />
    </SafeAreaView>
</ScrollView>;


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

// different routes for all, active and completed todos
const tavNav = (props) => React.createElement(
    createDrawerNavigator({
            FirstTab: {
                screen: FirstTab
            },
            SecondTab: {
                screen: SecondTab
            },
            ThirdTab: {
                screen: ThirdTab,
            },
            FourthTab: {
                screen: FourthTab,
            },
            FifthTab: {
                screen: FifthTab,
            },
        },
        {
            initialRouteName: 'FirstTab',
            drawerWidth: metrics.screenWidth - 56,
            drawerPosition: props.isRtl ? 'right' : 'left',
            drawerBackgroundColor: props.colorScheme.containersBackground,
            contentOptions: {
                labelStyle: {color: props.colorScheme.fullToneText},
                inactiveTintColor:props.colorScheme.fullToneText
            },
            contentComponent: CustomDrawerContentComponent
        }
    )
);
const chooseIcon = (index)=>{
    switch (index) {
        case 0: return 'chat';
        case 1: return 'search';
        case 2: return 'volume-mute';
        case 3: return 'place';
        case 4: return 'menu';
    }
}

const mapStateToProps = state => {
    return {
        isDarkMode: state.appSettings.isDarkMode,
        isRtl: state.appSettings.isRtl,
        colorScheme: state.appSettings.colorScheme
    };
};


export default connect(mapStateToProps)(tavNav);
