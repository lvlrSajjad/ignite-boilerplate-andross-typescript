import "react-native";
import * as React from "react";
import * as renderer from 'react-test-renderer';
import LoginScreenComponent from '../../../App/Components/LoginScreen/LoginScreenComponent'
import {colorScheme} from "../../../App/Themes/Colors";

test("Renders Correctly", () => {
    const tree = renderer.create(<LoginScreenComponent  colorScheme={colorScheme(false)} />).toJSON();
    expect(tree).toMatchSnapshot();
});
