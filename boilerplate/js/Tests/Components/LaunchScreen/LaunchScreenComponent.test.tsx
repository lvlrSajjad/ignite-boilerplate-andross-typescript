import "react-native";
import * as React from "react";
import * as renderer from 'react-test-renderer';
import LaunchScreenComponent from '../../../App/Components/LaunchScreen/LaunchScreenComponent'

test("Renders Correctly", () => {
  const tree = renderer.create(<LaunchScreenComponent/>).toJSON();
  expect(tree).toMatchSnapshot();
});
