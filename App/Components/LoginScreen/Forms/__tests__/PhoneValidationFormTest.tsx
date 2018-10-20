import "react-native";
import * as React from "react";
import PhoneValidationFormLtr from "../PhoneValidationForm/PhoneValidationForm.ltr";
import PhoneValidationFormRtl from "../PhoneValidationForm/PhoneValidationForm.rtl";
import { shallow } from "enzyme";


test("Renders Correctly", () => {
  const tree = shallow(
    <PhoneValidationFormLtr isDarkMode={false}   varCode = ''/>);
  expect(tree).toMatchSnapshot();
});

test("Renders Correctly", () => {
  const tree = shallow(    <PhoneValidationFormRtl isDarkMode={false}   varCode = '' />);
  expect(tree).toMatchSnapshot();
});
