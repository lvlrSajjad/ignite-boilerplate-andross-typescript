import "react-native";
import * as React from "react";
import {Direction as SettingsListItem} from "../SettingsListItem";
import {colorScheme} from "../../../../Themes/Colors";
import * as renderer from 'react-test-renderer';

test("Renders Correctly", () => {
  const tree = renderer.create(<SettingsListItem
      name={'sajjad'}
      icon={'1'}
      colorScheme={colorScheme(false)}
      isLtr={true}
    />).toJSON();
  expect(tree).toMatchSnapshot();
});
