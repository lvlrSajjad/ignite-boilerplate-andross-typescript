/* eslint react/prop-types: 0 */
import * as React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import { primaryColor} from '../Themes/Colors';
import {connect} from "react-redux";
import FirstTab from './MainTabs/FirstTab';
import SecondTab from './MainTabs/SecondTab';
import ThirdTab from './MainTabs/ThirdTab';
import FourthTab from './MainTabs/FourthTab';
import FifthTab from './MainTabs/FifthTab';
import Fonts from "../Themes/Fonts";
import {BottomNavigation} from 'react-native-paper';
import I18n from "../I18n";

const commonNavigationOptions = ({navigation}) => ({
  header: null,
  title: navigation.state.routeName,
});

const FirstRouteOptions = {
  screen: FirstTab,
  navigationOptions: commonNavigationOptions,
};
const SecondRouteOptions = {
  screen: SecondTab,
  navigationOptions: commonNavigationOptions,
};
const ThirdRouteOptions = {
  screen: ThirdTab,
  navigationOptions: commonNavigationOptions,
};
const FourthRouteOptions = {
  screen: FourthTab,
  navigationOptions: commonNavigationOptions,
};
const FifthRouteOptions = {
  screen: FifthTab,
  navigationOptions: commonNavigationOptions,
};

const order = (isRtl) => isRtl ?

  {
  [I18n.t('Fifth')]: FifthRouteOptions,
  [I18n.t('Fourth')]: FourthRouteOptions,
  [I18n.t('Third')]: ThirdRouteOptions,
  [I18n.t('Second')]: SecondRouteOptions,
  [I18n.t('First')]: FirstRouteOptions
  } : {
    [I18n.t('First')]: FirstRouteOptions,
    [I18n.t('Second')]: SecondRouteOptions,
    [I18n.t('Third')]: ThirdRouteOptions,
    [I18n.t('Fourth')]: FourthRouteOptions,
    [I18n.t('Fifth')]: FifthRouteOptions
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
            case I18n.t('First'):
              iconName = 'chat';
              break;
            case I18n.t('Second'):
              iconName = 'search';
              break;
            case I18n.t('Third'):
              iconName = 'volume-mute';
              break;
            case I18n.t('Fourth'):
              iconName = 'place';
              break;
            case  I18n.t('Fifth'):
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
