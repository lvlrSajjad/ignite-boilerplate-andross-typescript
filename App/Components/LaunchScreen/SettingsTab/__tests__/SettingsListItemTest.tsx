import "react-native";
import * as React from "react";
import {Direction as SettingsListItem} from "../SettingsListItem";
import * as renderer from 'react-test-renderer';
import {colorScheme} from "../../../../Themes/Colors";

test("Renders Correctly", () => {
  const tree = renderer.create(<SettingsListItem
      name={'sajjad'}
      icon={'1'}
      colorScheme={colorScheme(false)}
      isLtr={true}
    />).toJSON();
  expect(tree).toMatchSnapshot();
});
