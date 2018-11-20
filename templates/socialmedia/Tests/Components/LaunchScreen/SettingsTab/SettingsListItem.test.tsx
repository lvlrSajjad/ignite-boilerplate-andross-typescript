import "react-native";
import * as React from "react";
import * as renderer from 'react-test-renderer';
import {colorScheme} from "../../../../App/Themes/Colors";
import SettingsListItem from "../../../../App/Components/LaunchScreen/SettingsTab/SettingsListItem";

test("Renders Correctly", () => {
  const tree = renderer.create(<SettingsListItem
      name={'sajjad'}
      icon={'1'}
      colorScheme={colorScheme(false)}
      isRtl
    />).toJSON();
  expect(tree).toMatchSnapshot();
});
