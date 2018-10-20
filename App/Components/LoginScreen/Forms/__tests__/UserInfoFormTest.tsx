import "react-native";
import * as React from "react";
import UserInfoFormRtl from "../UserInfoForm/UserInfoForm.rtl";
import UserInfoFormLtr from "../UserInfoForm/UserInfoForm.ltr";
import {shallow} from "enzyme";

test("Renders Correctly", () => {
  const tree = shallow(<UserInfoFormRtl userName={''} isLoading={false}   />);
  expect(tree).toMatchSnapshot();
});

test("Renders Correctly", () => {
  const tree = shallow(<UserInfoFormLtr userName={''} isLoading={false}   />);
  expect(tree).toMatchSnapshot();
});

