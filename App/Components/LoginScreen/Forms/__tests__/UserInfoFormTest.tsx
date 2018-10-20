import "react-native";
import * as React from "react";
import UserInfoFormRtl from "../UserInfoForm/UserInfoForm.rtl";
import UserInfoFormLtr from "../UserInfoForm/UserInfoForm.ltr";
import * as renderer from 'react-test-renderer';

test("Renders Correctly", () => {
  const tree = renderer.create(<UserInfoFormRtl userName={''} isLoading={false}   />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("Renders Correctly", () => {
  const tree = renderer.create(<UserInfoFormLtr userName={''} isLoading={false}   />).toJSON();
  expect(tree).toMatchSnapshot();
});

