import "react-native";
import * as React from "react";
import * as renderer from 'react-test-renderer';
import LoginForm from '../../../../App/Components/LoginScreen/Forms/LoginForm'

test("Renders Correctly", () => {
const tree = renderer.create(<LoginForm  password='' primaryColor='blue' userName=''/>).toJSON();
expect(tree).toMatchSnapshot();
});
