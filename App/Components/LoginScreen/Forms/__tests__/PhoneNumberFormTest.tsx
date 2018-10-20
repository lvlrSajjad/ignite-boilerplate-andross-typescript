import "react-native";
import * as React from "react";
import PhoneNumberFormLtr from "../PhoneNumberForm/PhoneNumberForm.ltr";
import PhoneNumberFormRtl from "../PhoneNumberForm/PhoneNumberForm.rtl";
import {PhoneNumberFormProps} from "../PhoneNumberForm";
import { shallow } from "enzyme";

const params:PhoneNumberFormProps = {
  prefixNumber: '',
  primaryColor: '',
  phoneNumber: '',
  isDarkMode: true,
  isLtr: true
};

test("Renders Correctly", () => {
  const tree = shallow(<PhoneNumberFormLtr {...params} />);
  expect(tree).toMatchSnapshot();
});

test("Renders Correctly", () => {
  const tree = shallow(<PhoneNumberFormRtl {...params} />);
  expect(tree).toMatchSnapshot();
});
