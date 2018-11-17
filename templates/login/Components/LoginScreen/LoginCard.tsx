import * as React from "react";
import {Card} from 'native-base';
import LoginForm from "./Forms/LoginForm";

interface LoginCardProps {
  primaryColor?: string,
  isLoading?: boolean,
  onButtonPress?(): void
  password?: string,
  userName?: string,
  onTextChangePasword?(text:string):void,
  onTextChangeUserName?(text:string):void
}

interface LoginCardState {
  password: string,
  userName: string
}

export default class LoginCard extends React.Component<LoginCardProps, LoginCardState> {

  render() {
    return (
      <Card style={{width: "100%"}}>
        <LoginForm
          onPress={()=>{this.props.onButtonPress();}}
          userName={this.props.userName}
          password={this.props.password}
          onTextChangeUserName={(text)=>this.props.onTextChangeUserName(text)}
          onTextChangePasword={(text)=>this.props.onTextChangePasword(text)}
          isLoading={this.props.isLoading}
        />
      </Card>
    )
  }
}

