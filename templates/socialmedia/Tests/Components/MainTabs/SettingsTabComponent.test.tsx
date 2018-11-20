import "react-native";
import * as React from "react";
import * as renderer from 'react-test-renderer';
import SettingsTabComponent from '../../../App/Components/MainTabs/SettingsTabComponent'
import {colorScheme} from "../../../App/Themes/Colors";

test("Renders Correctly En", () => {
    const tree = renderer.create(<SettingsTabComponent locale='fa' colorScheme={colorScheme(false)}/>).toJSON();
    expect(tree).toMatchSnapshot();
});

test("Renders Correctly Fa", () => {
    const tree = renderer.create(<SettingsTabComponent locale='en' colorScheme={colorScheme(false)}/>).toJSON();
    expect(tree).toMatchSnapshot();
});

test("Renders Correctly En", () => {
    const tree = renderer.create(<SettingsTabComponent locale='fa' colorScheme={colorScheme(true)}/>).toJSON();
    expect(tree).toMatchSnapshot();
});
