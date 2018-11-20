import "react-native";
import * as React from "react";
import * as renderer from 'react-test-renderer';
import ChatsScreenComponent from '../../../../App/Components/MainTabs/ChatsTabScreens/ChatsScreenComponent'
import {colorScheme} from "../../../../App/Themes/Colors";

test("Renders Correctly", () => {
    const tree = renderer.create(<ChatsScreenComponent colorScheme={colorScheme(false)}/>).toJSON();
    expect(tree).toMatchSnapshot();
});
