import {ImageStyle, StyleSheet} from "react-native";
import { ApplicationStyles,Fonts } from "../../../Themes";

export default StyleSheet.create({
    ...ApplicationStyles.screen,
    loginForm: {
        justifyContent: "center",
        alignItems: "center",
        padding: 16
    },
    loginFormCardView: {
        width: "100%"
    },
    loginFormTextInput: {
        ...Fonts.style.input,
        color: '#212121',
        height: 48,
        marginTop: 10
    },
    loginFormFloatingLabel: {
        ...Fonts.style.input,
    },
    loginFormPrefixText: {
        ...Fonts.style.input,
        marginRight: 4,
        marginLeft: 4,
        marginTop: 10,
        paddingBottom: 2,
    },
    loginFormPhoneInputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        width: 128,
        height: 128,
        borderRadius: 64,
        overflow: 'hidden',
        margin: 32,
        alignSelf: 'center'
    } as ImageStyle,
});
