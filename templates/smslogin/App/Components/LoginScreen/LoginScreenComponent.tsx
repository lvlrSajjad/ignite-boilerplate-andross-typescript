import * as React from 'react'
import {View} from "react-native";
import {NavigationActions} from 'react-navigation';
import {ColorScheme} from "../../Themes/Colors";
import styles from "./Styles";
import {Card} from 'native-base';
import PhoneNumberForm from "./Forms/PhoneNumberForm";
import PhoneValidationForm from "./Forms/PhoneValidationForm";
import UserInfoForm from "./Forms/UserInfoForm";

interface LoginScreenProps {
    navigation?: any,
    colorScheme: ColorScheme,

    loginStep(step: number): void,

    setPhoneNumber(text: string): void,

    setVerifyCode(text: string): void,

    setUserName(text: string): void,

    step?: number,
    phoneNumber?: string,
    varCode?: string,
    prefixNumber?: string,
    userName?: string,
    isRtl?: boolean

}

interface LoginScreenState {
    isLoading?: boolean,
}

const navigateAction = NavigationActions.navigate({
    routeName: 'LaunchScreen',
    params: {}
});


export default class LoginScreen extends React.Component<LoginScreenProps, LoginScreenState> {
    constructor(props) {
        super(props);

        this.state = {
            // populate state fields according to props fields
        };
    }

    render() {

        return (
            <View
                style={[styles.mainContainer, styles.loginForm, {backgroundColor: this.props.colorScheme.containersBackground}]}>
                <Card style={{width: "100%"}}>
                    {this.props.step === 1 &&
                    <PhoneNumberForm
                        onPress={() => {
                            this.props.loginStep(2);
                        }}
                        phoneNumber={this.props.phoneNumber}
                        onTextChange={(text) => this.props.setPhoneNumber(text)}
                        prefixNumber={this.props.prefixNumber}
                        isLoading={this.state.isLoading}
                        isRtl={this.props.isRtl}
                    />
                    }
                    {this.props.step === 2 &&
                    <PhoneValidationForm
                        onPress={() => {
                            this.props.loginStep(3);
                        }}
                        onTextChange={(text) => this.props.setVerifyCode(text)}
                        onBackButtonPress={() => {
                            this.props.loginStep(1);
                        }}
                        isLoading={this.state.isLoading}
                        varCode={this.props.varCode}
                        isRtl={this.props.isRtl}
                    />
                    }
                    {this.props.step === 3 &&
                    <UserInfoForm
                        userName={this.props.userName}
                        onTextChange={(text) => this.props.setUserName(text)}
                        isLoading={this.state.isLoading}
                        onPress={() => {
                            this.props.navigation.dispatch(navigateAction);
                        }}
                        onBackButtonPress={() => {
                            this.props.loginStep(2);
                        }}
                        isRtl={this.props.isRtl}
                    />
                    }
                </Card>
            </View>
        );
    }
}
