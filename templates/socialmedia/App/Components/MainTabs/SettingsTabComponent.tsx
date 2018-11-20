import * as React from 'react'
import {Image, ScrollView, View} from "react-native";
import { Card, Text} from "native-base";
import SettingsToggleItem from "../LaunchScreen/SettingsTab/SettingsToggleItem/index";
import I18n from '../../I18n';
import {ColorScheme} from "../../Themes/Colors";
import styles from "./Styles/index";
import SettingsListItem from "../LaunchScreen/SettingsTab/SettingsListItem/index";
import metrics from "../../Themes/Metrics";
import Fonts from "../../Themes/Fonts";

interface SettingsTabProps {
  isRtl?:boolean,
  isDarkMode?:boolean,
  toggleDarkMode?():void,
  toggleDirection?():void,
  selectLocale?(local:string):void,
  locale: string,
  colorScheme: ColorScheme
}

export default class SettingsTabComponent extends React.Component<SettingsTabProps> {

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
          <Image source={{uri: 'https://pickaface.net/gallery/avatar/sergkol56f3761506549.png'}} style={styles.avatar}/>
          <Text style={{color: ColorScheme.midToneText, fontFamily: Fonts.type.base, alignSelf: 'center'}}>Sajjad</Text>
          <Text style={{
            color: ColorScheme.midToneText,
            fontFamily: Fonts.type.base,
            alignSelf: 'center'
          }}>+989139435192</Text>
          <Card style={{
            alignSelf: 'center',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            width: metrics.screenWidth - 32,
            backgroundColor:ColorScheme.cardBackground

          }}>
            <SettingsListItem isRtl={this.props.isRtl} colorScheme ={ColorScheme} icon={'account'} name={I18n.t('contacts')}/>
            <SettingsListItem isRtl={this.props.isRtl} colorScheme ={ColorScheme} icon={'content-save'} name={I18n.t('savedMessages')}/>
            <SettingsListItem isRtl={this.props.isRtl} colorScheme ={ColorScheme} icon={'folder-account'} name={I18n.t('inviteFriends')}/>
            <SettingsListItem isRtl={this.props.isRtl} colorScheme ={ColorScheme} icon={'settings'} name={I18n.t('settings')}/>
            <SettingsListItem isRtl={this.props.isRtl} colorScheme ={ColorScheme} icon={'help-circle'} name={I18n.t('help')}/>
          </Card>
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
