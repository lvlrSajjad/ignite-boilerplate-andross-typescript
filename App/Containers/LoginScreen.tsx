import * as React from 'react'
import {Component} from 'react';
import {View} from "react-native";
import {connect} from "react-redux";
import styles from "./Styles/LoginScreenStyles";
import {LoginCard,userInfoStep,verificationStep} from "../Components/LoginScreen/LoginCard";
import {MKColor} from 'react-native-material-kit';
import { NavigationActions } from 'react-navigation';
import {ColorScheme} from "../Themes/Colors";

interface LoginScreenProps {
  navigation?:any,
  colorScheme: ColorScheme
}

interface LoginScreenState {
  isLoading?:boolean,
}

const navigateAction = NavigationActions.navigate({
  routeName: 'LaunchScreen',

  params: {},

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
          onButtonPress={(step)=>{
            if (step === 1){
              verificationStep();
            } else if (step===2){
              userInfoStep();
            } else if (step ===3){
              this.props.navigation.dispatch(navigateAction);
            }
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

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
