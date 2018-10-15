import * as React from "react";
import {Card} from 'native-base';
import PhoneNumberForm from "./Forms/PhoneNumberForm";
import PhoneValidationForm from "./Forms/PhoneValidationForm";
import UserInfoForm from "./Forms/UserInfoForm";

interface LoginCardProps {
  primaryColor?: string,
  isLoading?: boolean,

  onButtonPress(step: number, textValue?: string): void

  onBackButtonPressed(): void
}

interface LoginCardState {
  step?: number,
  phoneNumber?: string,
  varCode?: string,
  prefixNumber?: string,
  userName: string
}

export class LoginCard extends React.Component<LoginCardProps, LoginCardState> {

  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      phoneNumber: '',
      varCode: '',
      prefixNumber: '+98',
      userName: ''
    };
    phoneNumberStep = phoneNumberStep.bind(this);
    verificationStep = verificationStep.bind(this);
    userInfoStep = userInfoStep.bind(this);

  }

  render() {
    return (
      <Card style={{width: "100%"}}>
        {this.state.step === 1 &&
        <PhoneNumberForm
        onPress={()=>{this.props.onButtonPress(this.state.step, this.validatePhoneNumber());}}
        phoneNumber={this.state.phoneNumber}
        onTextChange={(text)=>this.setState({phoneNumber: text})}
        prefixNumber={this.state.prefixNumber}
        isLoading={this.props.isLoading}
        />
        }
        {this.state.step === 2 &&
        <PhoneValidationForm
          onPress={()=>{this.props.onButtonPress(this.state.step, this.state.varCode);}}
          onTextChange={(text)=>this.setState({varCode: text})}
          onBackButtonPress={()=>{
            this.setState({step: 1});
            this.props.onBackButtonPressed();
          }}
          isLoading={this.props.isLoading}
          varCode={this.state.varCode}
        />
        }
        {this.state.step === 3 &&
        <UserInfoForm
          userName={this.state.userName}
          onTextChange={(text)=>this.setState({userName: text})}
          isLoading={this.props.isLoading}
          onPress={()=>{this.props.onButtonPress(this.state.step, this.state.userName);}}
          onBackButtonPress={()=>{
            this.setState({step: 2});
            this.props.onBackButtonPressed();
          }}
        />
        }
      </Card>
    )
  }

  validatePhoneNumber=():string=>{
    const phoneNumberState = this.state.phoneNumber;
    const phoneNumber = phoneNumberState.startsWith('0') ?
      phoneNumberState.substring(1, phoneNumberState.length) :
      phoneNumberState;
    return phoneNumber;
  }

}

export function phoneNumberStep() {
  this.setState({step: 1});
}

export function verificationStep() {
  this.setState({step: 2});
}

export function userInfoStep() {
  this.setState({step: 3});
}

export default {
  LoginCard,
  phoneNumberStep,
  verificationStep,
  userInfoStep
}
