import * as React from "react";
import {Card} from 'native-base';
import PhoneNumberForm from "./Forms/PhoneNumberForm";
import PhoneValidationForm from "./Forms/PhoneValidationForm";
import UserInfoForm from "./Forms/UserInfoForm";

interface LoginCardProps {
  primaryColor?: string,
  isLoading?: boolean,
  onButtonPress?(step: number, textValue?: string): void
  onBackButtonPressed?(currentStep:number): void,
  step?: number,
  phoneNumber?: string,
  varCode?: string,
  prefixNumber?: string,
  userName?: string,
  onPhoneNumberFormTextChange?(text:string):void,
  onPhoneValidationFormTextChange?(text:string):void,
  onUserInfoFormTextChange?(text:string):void,

}

interface LoginCardState {
  step?: number,
  phoneNumber?: string,
  varCode?: string,
  prefixNumber?: string,
  userName: string,

}

export default class LoginCard extends React.Component<LoginCardProps, LoginCardState> {
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
        onTextChange={(text)=>this.props.onPhoneNumberFormTextChange(text)}
        prefixNumber={this.props.prefixNumber}
        isLoading={this.props.isLoading}
        isRtl={this.props.isRtl}
        />
        }
        {this.props.step === 2 &&
        <PhoneValidationForm
          onPress={()=>{this.props.onButtonPress(this.props.step, this.props.varCode);}}
          onTextChange={(text)=>this.props.onPhoneValidationFormTextChange(text)}
          onBackButtonPress={()=>{
            this.props.onBackButtonPressed(2);
          }}
          isLoading={this.props.isLoading}
          varCode={this.props.varCode}
          isRtl={this.props.isRtl}
        />
        }
        {this.props.step === 3 &&
        <UserInfoForm
          userName={this.props.userName}
          onTextChange={(text)=>this.props.onUserInfoFormTextChange(text)}
          isLoading={this.props.isLoading}
          onPress={()=>{this.props.onButtonPress(this.props.step, this.props.userName);}}
          onBackButtonPress={()=>{
            this.props.onBackButtonPressed(3);
          }}
          isRtl={this.props.isRtl}
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

