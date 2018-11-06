import * as React from "react";
import {Card} from 'native-base';
import LoginForm from "./Forms/LoginForm";
import {connect} from "react-redux";
import * as LoginActions from "../../Redux/Login/LoginActions";

interface LoginCardProps {
  primaryColor?: string,
  isLoading?: boolean,
  onButtonPress?(): void
  password?: string,
  userName?: string,
  setPassword?(text:string):void,
  setUserName?(text:string):void
}

interface LoginCardState {
  password: string,
  userName: string
}

export class LoginCard extends React.Component<LoginCardProps, LoginCardState> {

  render() {
    return (
      <Card style={{width: "100%"}}>
        <LoginForm
          onPress={()=>{this.props.onButtonPress();}}
          userName={this.props.userName}
          password={this.props.password}
          onTextChangeUserName={(text)=>this.props.setUserName(text)}
          onTextChangePasword={(text)=>this.props.setPassword(text)}
          isLoading={this.props.isLoading}
        />
      </Card>
    )
  }
}

const mapStateToProps = state => ({
  userName: state.login.userName,
  password: state.login.password

});

//const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, /**mapDispatchToProps*/ LoginActions)(LoginCard);


