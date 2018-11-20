import "react-native";
import * as React from "react";
import * as renderer from 'react-test-renderer';
import ChannelsTabComponent from '../../../App/Components/MainTabs/ChannelsTabComponent';
import {colorScheme} from "../../../App/Themes/Colors";

test("Renders Correctly", () => {
    const tree = renderer.create(<ChannelsTabComponent colorScheme={colorScheme(false)}/>).toJSON();
    expect(tree).toMatchSnapshot();
});
