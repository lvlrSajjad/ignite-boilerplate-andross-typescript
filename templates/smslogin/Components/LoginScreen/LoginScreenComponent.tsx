import * as React from 'react'
import {View} from "react-native";
import {MKColor} from 'react-native-material-kit';
import { NavigationActions } from 'react-navigation';
import {ColorScheme} from "../Themes/Colors";
import styles from "./Styles";
import LoginCard from "./LoginCard";

interface LoginScreenProps {
  navigation?:any,
  colorScheme: ColorScheme,
  loginStep(step:number):void,
  setPhoneNumber(text:string):void,
  setVerifyCode(text:string):void,
  setUserName(text:string):void,
  step?: number,
  phoneNumber?: string,
  varCode?: string,
  prefixNumber?: string,
  userName?: string,
  isRtl?: boolean

}

interface LoginScreenState {
  isLoading?:boolean,
}

const navigateAction = NavigationActions.navigate({
  routeName: 'LaunchScreen',
  params: {}
});


export default class LoginScreen extends React.Component<LoginScreenProps,LoginScreenState> {
  constructor(props) {
    super(props);

    this.state = {
      // populate state fields according to props fields
    };
  }

  render() {

    return (
      <View style={[styles.mainContainer, styles.loginForm,{backgroundColor:this.props.colorScheme.containersBackground}]}>
        <LoginCard
          isLoading={this.state.isLoading}
          onButtonPress={(step,value)=>{
            if (step === 1){
              this.props.loginStep(2);
            } else if (step===2){
              this.props.loginStep(3);
            } else if (step ===3){
              this.props.navigation.dispatch(navigateAction);
            }
          }}
          primaryColor={MKColor.Blue}
          onBackButtonPressed={(currentStep)=>{this.props.loginStep(currentStep-1);}}
          step={this.props.step}
          phoneNumber={this.props.phoneNumber}
          varCode={this.props.varCode}
          prefixNumber={this.props.prefixNumber}
          userName={this.props.userName}
          isRtl={this.props.isRtl}
          onPhoneNumberFormTextChange={(text)=>this.props.setPhoneNumber(text)}
          onPhoneValidationFormTextChange={(text)=>this.props.setVerifyCode(text)}
          onUserInfoFormTextChange={(text)=>this.props.setUserName(text)}
        />
      </View>
    );
  }
}
