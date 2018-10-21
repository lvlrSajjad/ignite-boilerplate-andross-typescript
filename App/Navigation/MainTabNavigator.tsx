/* eslint react/prop-types: 0 */
import * as React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import { primaryColor} from '../Themes/Colors';
import {connect} from "react-redux";
import ChatsTab from './ChatsTabNavigator';
import SearchTab from '../Containers/MainTabs/SearchTab';
import ChannelsTab from '../Containers/MainTabs/ChannelsTab';
import LocationTab from '../Containers/MainTabs/LocationTab';
import SettingsTab from '../Containers/MainTabs/SettingsTab';
import Fonts from "../Themes/Fonts";
import {BottomNavigation} from 'react-native-paper';
import I18n from "../I18n";

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
const LocationRouteOptions = {
  screen: LocationTab,
  navigationOptions: commonNavigationOptions,
};
const SettingsRouteOptions = {
  screen: SettingsTab,
  navigationOptions: commonNavigationOptions,
};

const order = (isRtl) => isRtl ?

  {
    [I18n.t('settings')]: SettingsRouteOptions,
    [I18n.t('search')]: SearchRouteOptions,
    [I18n.t('location')]: LocationRouteOptions,
    [I18n.t('channels')]: ChannelsRouteOptions,
    [I18n.t('chats')]: ChatsRouteOptions
  } : {
    [I18n.t('chats')]: ChatsRouteOptions,
    [I18n.t('channels')]: ChannelsRouteOptions,
    [I18n.t('location')]: LocationRouteOptions,
    [I18n.t('search')]: SearchRouteOptions,
    [I18n.t('settings')]: SettingsRouteOptions

  };

// different routes for all, active and completed todos
const tavNav = (props) => React.createElement(
  createMaterialBottomTabNavigator(
    order(props.isRtl),
    {
      navigationOptions: ({navigation}) => ({
        tabBarIcon: ({focused}) => {
          const {routeName} = navigation.state;
          let iconName;
          switch (routeName) {
            case I18n.t('chats'):
              iconName = 'chat';
              break;
            case I18n.t('search'):
              iconName = 'search';
              break;
            case I18n.t('channels'):
              iconName = 'volume-mute';
              break;
            case I18n.t('location'):
              iconName = 'place';
              break;
            case  I18n.t('settings'):
              iconName = 'menu'
          }
          return (
            <MaterialIcons
              name={iconName}
              size={28}
              style={{marginBottom: 0}}
              color={focused ?
                primaryColor :
                //  props.colorScheme.fullToneText
                props.colorScheme.fullToneText
              }
            />
          );
        }
      }),
      shifting: true,
      tabBarComponent: BottomNavigation,
      tabBarPosition: 'bottom',
      animationEnabled: true,
      swipeEnabled: true,
      tabBarOptions: {
        labelStyle: {
          fontSize: 10,
          fontFamily: Fonts.type.farsi,
          color: props.colorScheme.fullToneText
        },
        style: {
          backgroundColor: props.colorScheme.tabBarBackground
        },
      },
      initialRouteName: I18n.t('chats'),
      labelStyle: {
        fontSize: 10,
        fontFamily: Fonts.type.farsi,
        color: props.colorScheme.fullToneText
      },
      barStyle: {
        backgroundColor: props.colorScheme.tabBarBackground
      },
    },
  )
);

const mapStateToProps = state => {
  return {
    isDarkMode: state.appSettings.isDarkMode,
    isRtl: state.appSettings.isRtl,
    colorScheme: state.appSettings.colorScheme
  };
};


export default connect(mapStateToProps)(tavNav);
