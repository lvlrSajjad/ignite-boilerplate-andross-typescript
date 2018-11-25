import * as React from 'react';
import {createBottomTabNavigator,createAppContainer} from 'react-navigation';
import {MaterialBottomTabbar} from 'react-native-typescript-material-ui-collection';
import I18n from "../../I18n";
import ChatsTab from '../../Containers/MainTabs/ChatsTab';
import SearchTab from '../../Containers/MainTabs/SearchTab';
import ChannelsTab from '../../Containers/MainTabs/ChannelsTab';
//import LocationTab from '../Containers/MainTabs/LocationTab'; // need to install mapbox for this
import SettingsTab from '../../Containers/MainTabs/SettingsTab';
import Fonts from "../../Themes/Fonts";
import { primaryColor} from '../../Themes/Colors';

const commonNavigationOptions = ({navigation}) => ({
    header: null,
    title: navigation.state.routeName,
});

const ChatsRouteOptions = {
    screen: ChatsTab,
    navigationOptions: commonNavigationOptions,
};
const SearchRouteOptions = {
    screen: SearchTab,
    navigationOptions: commonNavigationOptions,
};
const ChannelsRouteOptions = {
    screen: ChannelsTab,
    navigationOptions: commonNavigationOptions,
};
// const LocationRouteOptions = {
//     screen: LocationTab,
//     navigationOptions: commonNavigationOptions,
// };
const SettingsRouteOptions = {
    screen: SettingsTab,
    navigationOptions: commonNavigationOptions,
};
// different routes for all, active and completed todos
export default (props) => React.createElement(
    createAppContainer(createBottomTabNavigator(
        {
            [I18n.t('chats')]: ChatsRouteOptions,
            [I18n.t('channels')]: ChannelsRouteOptions,
         //   [I18n.t('location')]: LocationRouteOptions,
            [I18n.t('search')]: SearchRouteOptions,
            [I18n.t('settings')]: SettingsRouteOptions
        },
        {
            tabBarComponent:MaterialBottomTabbar,
            tabBarPosition: 'bottom',
            tabBarOptions:{
                animated:true,
                isRtl:props.isRtl,
                fontSize:12,
                noLabel:false,
                iconName:(key)=>iconChooser(key),
                fontFamily: Fonts.type.base,
                defaultColor:props.colorScheme.fullToneText,
                selectedColor:primaryColor,
                style: {
                    backgroundColor: props.colorScheme.tabBarBackground
                },
            },
            initialRouteName: I18n.t('chats')
        },
    ))
);

function iconChooser(key) {
    let iconName;
    switch (key) {
        case I18n.t('chats'):
            iconName = 'message-text';
            break;
        case I18n.t('search'):
            iconName = 'magnify';
            break;
        case I18n.t('channels'):
            iconName = 'bullhorn';
            break;
        case I18n.t('location'):
            iconName = 'map-marker';
            break;
        case  I18n.t('settings'):
            iconName = 'menu'
    }
    return iconName;

}
