import "react-native";
import * as React from "react";
import * as renderer from 'react-test-renderer';
import ExampleComponent from '../../../App/Components/ExampleComponent'

test("Renders Correctly", () => {
    const tree = renderer.create(<ExampleComponent  title='title'/>).toJSON();
    expect(tree).toMatchSnapshot();
});
