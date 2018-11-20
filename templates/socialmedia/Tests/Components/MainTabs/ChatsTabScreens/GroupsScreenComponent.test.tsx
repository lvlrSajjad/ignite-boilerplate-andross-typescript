import "react-native";
import * as React from "react";
import * as renderer from 'react-test-renderer';
import GroupsScreenComponent from '../../../../App/Components/MainTabs/ChatsTabScreens/GroupsScreenComponent'
import {colorScheme} from "../../../../App/Themes/Colors";

test("Renders Correctly", () => {
    const tree = renderer.create(<GroupsScreenComponent colorScheme={colorScheme(false)}/>).toJSON();
    expect(tree).toMatchSnapshot();
});
