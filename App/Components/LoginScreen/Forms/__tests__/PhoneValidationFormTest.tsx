import "react-native";
import * as React from "react";
import PhoneValidationFormLtr from "../PhoneValidationForm/PhoneValidationForm.ltr";
import PhoneValidationFormRtl from "../PhoneValidationForm/PhoneValidationForm.rtl";
import * as renderer from 'react-test-renderer';


test("Renders Correctly", () => {
  const tree = renderer.create(
    <PhoneValidationFormLtr isDarkMode={false}   varCode = ''/>).toJSON();
  expect(tree).toMatchSnapshot();
});

test("Renders Correctly", () => {
  const tree = renderer.create(    <PhoneValidationFormRtl isDarkMode={false}   varCode = '' />).toJSON();
  expect(tree).toMatchSnapshot();
});
