import "react-native";
import * as React from "react";
import { shallow } from "enzyme";
import * as renderer from "react-test-renderer";
import {Direction as FullButton} from "../FullButton";

test("FullButton component renders correctly", () => {
  const tree = renderer.create(<FullButton isLtr={true} onPress={() => {}} text="hi" />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("onPress", () => {
  let i = 0; // i guess i could have used sinon here too... less is more i guess
  const onPress = () => i++;
  const wrapperPress = shallow(<FullButton isLtr={true} onPress={onPress} text="hi" />);

  expect(wrapperPress.prop("onPress")).toBe(onPress); // uses the right handler
  expect(i).toBe(0);
  wrapperPress.simulate("press");
  expect(i).toBe(1);
});

test("FullButton component renders correctly", () => {
  const tree = renderer.create(<FullButton isLtr={false} onPress={() => {}} text="hi" />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("onPress", () => {
  let i = 0; // i guess i could have used sinon here too... less is more i guess
  const onPress = () => i++;
  const wrapperPress = shallow(<FullButton isLtr={false} onPress={onPress} text="hi" />);

  expect(wrapperPress.prop("onPress")).toBe(onPress); // uses the right handler
  expect(i).toBe(0);
  wrapperPress.simulate("press");
  expect(i).toBe(1);
});
