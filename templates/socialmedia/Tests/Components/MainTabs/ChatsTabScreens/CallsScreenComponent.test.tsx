import "react-native";
import * as React from "react";
import * as renderer from 'react-test-renderer';
import CallsScreenComponent from '../../../../App/Components/MainTabs/ChatsTabScreens/CallsScreenComponent'
import {colorScheme} from "../../../../App/Themes/Colors";

test("Renders Correctly", () => {
    const tree = renderer.create(<CallsScreenComponent colorScheme={colorScheme(false)}/>).toJSON();
    expect(tree).toMatchSnapshot();
});
