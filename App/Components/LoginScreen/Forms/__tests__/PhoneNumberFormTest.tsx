import "react-native";
import * as React from "react";
import {Direction as PhoneNumberForm} from "../PhoneNumberForm";
import {PhoneNumberFormProps} from "../PhoneNumberForm";
import { shallow } from "enzyme";

const params:PhoneNumberFormProps = {
  prefixNumber: '',
  primaryColor: '',
  phoneNumber: '',
  isDarkMode: true,
};

const minimumParams:PhoneNumberFormProps = {
  prefixNumber: '',
  primaryColor: '',
  phoneNumber: ''
};

test("renders without crashing", () => {
  shallow(<PhoneNumberForm {...params} />);
});

test("renders without crashing", () => {
  shallow(<PhoneNumberForm {...params} />);
});

test("renders without without darkMode param", () => {
  shallow(<PhoneNumberForm {...minimumParams} />);
});

test("renders without without darkMode param", () => {
  shallow(<PhoneNumberForm {...minimumParams} />);
});

test("onPress", () => {
  let i = 0; // i guess i could have used sinon here too... less is more i guess
  const onPress = () => i++;
  const wrapperPress = shallow(
    <PhoneNumberForm {...params} onPress={onPress} />
  );

  expect(wrapperPress.prop("onPress")).toBe(onPress); // uses the right handler
  expect(i).toBe(0);
  wrapperPress.simulate("press");
  expect(i).toBe(1);
});
