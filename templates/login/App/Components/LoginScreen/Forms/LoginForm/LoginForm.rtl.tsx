import * as React from "react";
import {View} from "react-native";
import {CardItem} from "native-base";
import styles from "../../Styles/index";
import Fonts from "../../../../Themes/Fonts";
import {MaterialTextInput,MaterialContainedButton} from 'react-native-typescript-material-ui-collection';
import {primaryColor} from "../../../../Themes/Colors";
import I18n from "../../../../I18n";
import {LoginFormProps} from "./index";

export default (props: LoginFormProps) => {
    return (
        <View>
            <CardItem>
                <View style={styles.loginFormPhoneInputContainer}>
                    <MaterialTextInput
                        titleTextStyle={{...Fonts.style.input}}
                        labelTextStyle={{...Fonts.style.input}}
                        containerStyle={{flex: 1}}
                        label={I18n.t('userName')}
                        value={props.userName}
                        isRtl={false}
                        onChangeText={(text) => props.onTextChangeUserName(text)}
                    />
                </View>
            </CardItem>
            <CardItem>
                <View style={styles.loginFormPhoneInputContainer}>
                    <MaterialTextInput
                        titleTextStyle={{...Fonts.style.input}}
                        labelTextStyle={{...Fonts.style.input}}
                        containerStyle={{flex: 1}}
                        label={I18n.t('password')}
                        value={props.password}
                        isRtl={false}
                        onChangeText={(text) => props.onTextChangePasword(text)}
                    />
                </View>
            </CardItem>
            <CardItem>
                <MaterialContainedButton
                    onPress={() => {
                        props.onPress();
                    }}
                    color={primaryColor}
                    text="Login"
                    textColor="white"
                />
            </CardItem>
        </View>
    );
};
