import "react-native";
import * as React from "react";
import * as renderer from 'react-test-renderer';
import UserInfoForm from '../../../../App/Components/LoginScreen/Forms/UserInfoForm'

test("Renders Correctly", () => {
    const tree = renderer.create(<UserInfoForm   userName=''/>).toJSON();
    expect(tree).toMatchSnapshot();
});
