import * as React from 'react'
import {View} from "react-native";
import {MKColor} from 'react-native-material-kit';
import { NavigationActions } from 'react-navigation';
import {ColorScheme} from "../../Themes/Colors";
import styles from "./Styles";
import {Card} from 'native-base';
import LoginForm from "./Forms/LoginForm";

interface LoginScreenProps {
    navigation?:any,
    colorScheme: ColorScheme,
    loginStep(step:number):void,
    userName?: string,
    password?: string,
    setUserName?(userName:string):void,
    setPassword?(password:string):void,
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
                <Card style={{width: "100%"}}>
                    <LoginForm
                        onPress={()=>{this.props.navigation.dispatch(navigateAction);}}
                        userName={this.props.userName}
                        password={this.props.password}
                        onTextChangeUserName={(text)=>this.props.setUserName(text)}
                        onTextChangePasword={(text)=>this.props.setPassword(text)}
                        isLoading={this.state.isLoading}
                        primaryColor={MKColor.Blue}/>
                </Card>
            </View>
        );
    }
}
