import "react-native";
import * as React from "react";
import {LoginCard} from "../LoginCard";
import * as renderer from 'react-test-renderer';

test("Correct Render", () => {
  const tree = renderer.create(<LoginCard step={1} phoneNumber={''} varCode={''} prefixNumber={''} userName={''}  />).toJSON();
  expect(tree).toMatchSnapshot();
});

