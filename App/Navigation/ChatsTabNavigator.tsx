/* eslint react/prop-types: 0 */
import * as React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {createMaterialTopTabNavigator, TabBarTop} from 'react-navigation-tabs';
import Colors, {colorScheme, primaryColor} from '../Themes/Colors';
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


//


// different routes for all, active and completed todos
const tavNav = (props) => React.createElement(
  createMaterialTopTabNavigator(
    {
      ['chats']: ChatsRouteOptions,
      ['groups']: GroupsRouteOptions,
      ['calls']: CallsRouteOptions
    },
    {
      navigationOptions: ({navigation,screenProps }) => ({

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
                colorScheme(props.isDarkMode).fullToneText
              }
            />
          );
        },
      }),
      tabBarComponent: TabBarTop,

      tabBarPosition: 'top',
      animationEnabled: true,
      swipeEnabled: true,
      tabBarOptions: {

        inactiveTintColor: 'transparent',
        activeTintColor: 'transparent',
        //  showIcon:true,
        labelStyle: {
          fontSize: 12,
          fontFamily: Fonts.type.farsi,
          color: colorScheme(props.isDarkMode).fullToneText
        },
        style: {
          backgroundColor: colorScheme(props.isDarkMode).tabBarBackground,
        },
        indicatorStyle: {
          backgroundColor: primaryColor
        }
      },
    },
  )
);
const mapStateToProps = state => ({
  isDarkMode: state.isDarkMode.isDarkMode
});

export default connect(mapStateToProps)(tavNav);
//export default TabNav;
