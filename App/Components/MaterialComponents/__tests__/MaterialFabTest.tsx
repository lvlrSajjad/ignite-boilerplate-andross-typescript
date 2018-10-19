import "react-native";
import * as React from "react";
import { shallow } from "enzyme";
import * as renderer from "react-test-renderer";
import MaterialFab from "../MaterialFab";

test("RoundedButton component renders correctly", () => {
  const tree = renderer.create(
    <MaterialFab onPress={() => {}} color={'blue'} iconColor='white' size={52} textColor={'white'} icon={'check'} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});


test("onPress", () => {
  let i = 0; // i guess i could have used sinon here too... less is more i guess
  const onPress = () => i++;
  const wrapperPress = shallow(
    <MaterialFab onPress={onPress} color={'blue'} iconColor='white' size={52} icon={'check'} textColor={'white'} />
  );

  expect(wrapperPress.prop("onPress")).toBe(onPress); // uses the right handler
  expect(i).toBe(0);
  wrapperPress.simulate("press");
  expect(i).toBe(1);
});
