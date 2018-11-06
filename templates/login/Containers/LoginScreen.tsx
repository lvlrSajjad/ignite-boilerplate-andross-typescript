import * as React from 'react'
import {Component} from 'react';
import {View} from "react-native";
import {connect} from "react-redux";
import styles from "./Styles/LoginScreenStyles";
import LoginCard from "../Components/LoginScreen/LoginCard";
import {MKColor} from 'react-native-material-kit';
import { NavigationActions } from 'react-navigation';
import {ColorScheme} from "../Themes/Colors";
import * as LoginActions from '../Redux/Login/LoginActions';

interface LoginScreenProps {
  navigation?:any,
  colorScheme: ColorScheme,
  loginStep(step:number):void
}

interface LoginScreenState {
  isLoading?:boolean,
}

const navigateAction = NavigationActions.navigate({
  routeName: 'LaunchScreen',
  params: {}
});


class LoginScreen extends Component<LoginScreenProps,LoginScreenState> {
  constructor(props) {
    super(props);

    this.state = {
      // populate state fields according to props fields
    };
  }

  render() {
    console.log(this.props.colorScheme)
    return (
      <View style={[styles.mainContainer, styles.loginForm,{backgroundColor:this.props.colorScheme.containersBackground}]}>
        <LoginCard
          isLoading={this.state.isLoading}
          onButtonPress={()=>{
              this.props.navigation.dispatch(navigateAction);
          }}
          primaryColor={MKColor.Blue}
          onBackButtonPressed={()=>{console.log('back')}}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  colorScheme : state.appSettings.colorScheme
});

//const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, LoginActions)(LoginScreen);
