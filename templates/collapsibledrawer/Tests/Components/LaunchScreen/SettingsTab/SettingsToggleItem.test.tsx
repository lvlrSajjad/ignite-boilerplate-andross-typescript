import "react-native";
import * as React from "react";
import SettingsToggleItem from "../../../../App/Components/LaunchScreen/SettingsTab/SettingsToggleItem/index";
import * as renderer from 'react-test-renderer';
import {colorScheme} from "../../../../App/Themes/Colors";

test("Renders Correctly", () => {
  const tree = renderer.create(<SettingsToggleItem
    name="howdy"
    icon={'1'}
    value={true}
    colorScheme={colorScheme(true)}
    isRtl
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
