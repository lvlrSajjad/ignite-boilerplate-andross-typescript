import * as React from 'react'
import {Component} from 'react';
import {Image, ScrollView, View} from "react-native";
import {connect} from "react-redux";
import styles from "../Styles/LaunchScreenStyles";
import {Body, Card, CardItem, Row, Switch, Text} from "native-base";
import SettingsListItem from "../../Components/LaunchScreen/SettingsTab/SettingsListItem";
import metrics from "../../Themes/Metrics";
import Fonts from "../../Themes/Fonts";
import * as Actions from '../../Redux/Actions/IsDarkModeActions';
import {colorScheme} from "../../Themes/Colors";
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface SettingsTabProps {
  isDarkMode?:boolean,
  toggleDarkMode():void
}

class SettingsTab extends Component<SettingsTabProps> {

  constructor(props) {
    super(props);
  }

  render() {
    const ColorScheme = colorScheme(this.props.isDarkMode);

    return (
      <View style={{
        flex: 1,
        backgroundColor: ColorScheme.containersBackground
      }}>
        <ScrollView style={styles.container}>
          <Image source={{uri: 'https://pickaface.net/gallery/avatar/sergkol56f3761506549.png'}} style={styles.avatar}/>
          <Text style={{color: ColorScheme.midToneText, fontFamily: Fonts.type.farsi, alignSelf: 'center'}}>Sajjad</Text>
          <Text style={{
            color: ColorScheme.midToneText,
            fontFamily: Fonts.type.farsi,
            alignSelf: 'center'
          }}>+989139435192</Text>
          <Card style={{
            alignSelf: 'center',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            width: metrics.screenWidth - 32,
            backgroundColor:ColorScheme.cardBackground

          }}>
            <SettingsListItem colorScheme ={ColorScheme} icon={'account'} name={'Contacts'}/>
            <SettingsListItem colorScheme ={ColorScheme} icon={'content-save'} name={'Saved Messages'}/>
            <SettingsListItem colorScheme ={ColorScheme} icon={'settings'} name={'Invite Friends'}/>
            <SettingsListItem colorScheme ={ColorScheme} icon={'help-circle'} name={'Help'}/>
          </Card>
          <Card style={{
            alignSelf: 'center',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            width: metrics.screenWidth - 32
          }}>
            <CardItem>
              <Body>
              <Row>

                <Row style={{alignItems:'center',justifyContent:'center'}}>

                  <MaterialIcons
                    name={'weather-night'}
                    size={28}
                    style={{margin: 8}}
                    color={'#424242'}
                  />
                  <Text style={{fontFamily: Fonts.type.farsi, color: '#424242',flex:1}}>DarkMode</Text>

                </Row>
                <Switch
                  value={this.props.isDarkMode}
                  onValueChange={() => {
                    this.props.toggleDarkMode()
                  }}
                />
              </Row>
              </Body>
            </CardItem>
          </Card>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    isDarkMode: state.isDarkMode.isDarkMode
  };
};

// const mapDispatchToProps = dispatch => ({
//
// });

export default connect(mapStateToProps, Actions)(SettingsTab);
