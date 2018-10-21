import "react-native";
import * as React from "react";
import { shallow } from "enzyme";
import {Direction as MaterialButton} from "../MaterialButton";

test("renders without crash with minimum props", () => {
  shallow(<MaterialButton color={'blue'} text="hi" />);
});

test("onPress", () => {
  let i = 0; // i guess i could have used sinon here too... less is more i guess
  const onPress = () => i++;
  const wrapperPress = shallow(<MaterialButton color={'blue'} onPress={onPress} text="hi" />);

  expect(wrapperPress.prop("onPress")).toBe(onPress); // uses the right handler
  expect(i).toBe(0);
  wrapperPress.simulate("press");
  expect(i).toBe(1);
});
