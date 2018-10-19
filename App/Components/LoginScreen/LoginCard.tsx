import * as React from "react";
import {Card} from 'native-base';
import PhoneNumberForm from "./Forms/PhoneNumberForm";
import PhoneValidationForm from "./Forms/PhoneValidationForm";
import UserInfoForm from "./Forms/UserInfoForm";
import {connect} from "react-redux";
import * as LoginActions from "../../Redux/Login/LoginActions";

interface LoginCardProps {
  primaryColor?: string,
  isLoading?: boolean,
  onButtonPress(step: number, textValue?: string): void
  onBackButtonPressed(): void,
  step?: number,
  phoneNumber?: string,
  varCode?: string,
  prefixNumber?: string,
  userName?: string,
  loginStep(step:number):void,
  setPhoneNumber(text:string):void,
  setVerifyCode(text:string):void,
  setUserName(text:string):void

}

interface LoginCardState {
  step?: number,
  phoneNumber?: string,
  varCode?: string,
  prefixNumber?: string,
  userName: string
}

class LoginCard extends React.Component<LoginCardProps, LoginCardState> {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      phoneNumber: '',
      varCode: '',
      prefixNumber: '+98',
      userName: ''
    };
  }

  render() {
    return (
      <Card style={{width: "100%"}}>
        {this.props.step === 1 &&
        <PhoneNumberForm
        onPress={()=>{this.props.onButtonPress(this.props.step, this.validatePhoneNumber());}}
        phoneNumber={this.props.phoneNumber}
        onTextChange={(text)=>this.props.setPhoneNumber(text)}
        prefixNumber={this.props.prefixNumber}
        isLoading={this.props.isLoading}
        />
        }
        {this.props.step === 2 &&
        <PhoneValidationForm
          onPress={()=>{this.props.onButtonPress(this.props.step, this.props.varCode);}}
          onTextChange={(text)=>this.props.setVerifyCode(text)}
          onBackButtonPress={()=>{
            this.props.loginStep(1);
            this.props.onBackButtonPressed();
          }}
          isLoading={this.props.isLoading}
          varCode={this.props.varCode}
        />
        }
        {this.props.step === 3 &&
        <UserInfoForm
          userName={this.props.userName}
          onTextChange={(text)=>this.props.setUserName(text)}
          isLoading={this.props.isLoading}
          onPress={()=>{this.props.onButtonPress(this.props.step, this.props.userName);}}
          onBackButtonPress={()=>{
            this.props.loginStep(2);
            this.props.onBackButtonPressed();
          }}
        />
        }
      </Card>
    )
  }

  validatePhoneNumber=():string=>{
    const phoneNumberState = this.props.phoneNumber;
    return phoneNumberState.startsWith('0') ?
      phoneNumberState.substring(1, phoneNumberState.length) :
      phoneNumberState;
  }

}

const mapStateToProps = state => ({
  step: state.login.step,
  phoneNumber: state.login.phoneNumber,
  varCode: state.login.varCode,
  prefixNumber: state.login.prefixNumber,
  userName: state.login.userName

});

//const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, /**mapDispatchToProps*/ LoginActions)(LoginCard);


