import "react-native";
import * as React from "react";
import * as renderer from 'react-test-renderer';
import PhoneValidationForm from '../../../../App/Components/LoginScreen/Forms/PhoneValidationForm'

test("Renders Correctly", () => {
    const tree = renderer.create(<PhoneValidationForm   varCode=''/>).toJSON();
    expect(tree).toMatchSnapshot();
});
