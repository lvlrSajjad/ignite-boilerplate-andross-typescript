import "react-native";
import * as React from "react";
import PhoneNumberFormLtr from "../PhoneNumberForm/PhoneNumberForm.ltr";
import PhoneNumberFormRtl from "../PhoneNumberForm/PhoneNumberForm.rtl";
import {PhoneNumberFormProps} from "../PhoneNumberForm";
import * as renderer from 'react-test-renderer';

const params:PhoneNumberFormProps = {
  prefixNumber: '',
  primaryColor: '',
  phoneNumber: '',
  isDarkMode: true,
  isLtr: true
};

test("Renders Correctly", () => {
  const tree = renderer.create(<PhoneNumberFormLtr {...params} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("Renders Correctly", () => {
  const tree = renderer.create(<PhoneNumberFormRtl {...params} />).toJSON();
  expect(tree).toMatchSnapshot();
});
