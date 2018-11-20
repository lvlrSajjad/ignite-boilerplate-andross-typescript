import "react-native";
import * as React from "react";
import * as renderer from 'react-test-renderer';
import NavHeaders from '../../../App/Components/NavHeaders'

test("Renders Correctly", () => {
    const tree = renderer.create(<NavHeaders title="" />).toJSON();
    expect(tree).toMatchSnapshot();
});
