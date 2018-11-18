import "react-native";
import * as React from "react";
import * as renderer from 'react-test-renderer';
import PhoneNumberForm from '../../../../App/Components/LoginScreen/Forms/PhoneNumberForm'

test("Renders Correctly", () => {
    const tree = renderer.create(<PhoneNumberForm prefixNumber=''  phoneNumber=''/>).toJSON();
    expect(tree).toMatchSnapshot();
});
