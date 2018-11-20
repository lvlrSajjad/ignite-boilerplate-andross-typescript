import "react-native";
import * as React from "react";
import * as renderer from 'react-test-renderer';
import SearchTabComponent from '../../../App/Components/MainTabs/SearchTabComponent';

test("Renders Correctly", () => {
    const tree = renderer.create(<SearchTabComponent />).toJSON();
    expect(tree).toMatchSnapshot();
});
