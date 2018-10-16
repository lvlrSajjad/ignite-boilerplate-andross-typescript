/* eslint react/prop-types: 0 */
import * as React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {createMaterialTopTabNavigator, TabBarTop} from 'react-navigation-tabs';
import {colorScheme, primaryColor} from '../Themes/Colors';
import ChatsScreen from '../Containers/MainTabs/ChatsTabScreens/ChatsScreen';
import GroupsScreen from '../Containers/MainTabs/ChatsTabScreens/GroupsScreen';
import CallsScreen from '../Containers/MainTabs/ChatsTabScreens/CallsScreen';
import Fonts from "../Themes/Fonts";
import {connect} from "react-redux";

const commonNavigationOptions = ({navigation}) => ({
  header: null,
  title: navigation.state.routeName,
});

const ChatsRouteOptions = {
  screen: ChatsScreen,
  navigationOptions: commonNavigationOptions,
};
const GroupsRouteOptions = {
  screen: GroupsScreen,
  navigationOptions: commonNavigationOptions,
};
const CallsRouteOptions = {
  screen: CallsScreen,
  navigationOptions: commonNavigationOptions,
};


const order = (isLtr) => isLtr ?
  {
    ['chats']: ChatsRouteOptions,
    ['groups']: GroupsRouteOptions,
    ['calls']: CallsRouteOptions

  } :
  {
    ['calls']: CallsRouteOptions,
    ['groups']: GroupsRouteOptions,
    ['chats']: ChatsRouteOptions,

  };

const initialRoute ='chats';


// different routes for all, active and completed todos
const tavNav = (props) => React.createElement(
  createMaterialTopTabNavigator(
    order(props.isLtr),
    {
      navigationOptions: ({navigation }) => ({

        tabBarIcon: ({focused}) => {
          const {routeName} = navigation.state;
          let iconName;
          switch (routeName) {
            case 'chats':
              iconName = 'person';
              break;
            case 'groups':
              iconName = 'group';
              break;
            case 'calls':
              iconName = 'call';
          }
          return (
            <MaterialIcons
              name={iconName}
              size={28}
              style={{marginBottom: -3}}
              color={focused ?
                primaryColor :
               //props.colorScheme.fullToneText
                props.colorScheme.fullToneText
              }
            />
          );
        },
      }),
      tabBarComponent: TabBarTop,
      tabBarPosition: 'top',
      animationEnabled: true,
      initialRouteName: initialRoute,
      swipeEnabled: true,
      tabBarOptions: {

        inactiveTintColor: 'transparent',
        activeTintColor: 'transparent',
        //  showIcon:true,
        labelStyle: {
          fontSize: 12,
          fontFamily: Fonts.type.farsi,
          color: props.colorScheme.fullToneText
        },
        style: {
          backgroundColor: props.colorScheme.tabBarBackground,
        },
        indicatorStyle: {
          backgroundColor: primaryColor
        }
      },
    },
  )
);
const mapStateToProps = state => ({
  isDarkMode: state.appSettings.isDarkMode,
  isLtr:state.appSettings.isLtr,
  colorScheme: state.appSettings.colorScheme
});

export default connect(mapStateToProps)(tavNav);
//export default TabNav;
