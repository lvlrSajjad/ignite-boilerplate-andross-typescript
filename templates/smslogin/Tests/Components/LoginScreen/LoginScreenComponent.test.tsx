import "react-native";
import * as React from "react";
import * as renderer from 'react-test-renderer';
import LoginScreenComponent from '../../../App/Components/LoginScreen/LoginScreenComponent'

test("Renders Correctly", () => {
    const tree = renderer.create(<LoginScreenComponent />).toJSON();
    expect(tree).toMatchSnapshot();
});
