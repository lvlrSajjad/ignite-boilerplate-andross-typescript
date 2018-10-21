import "react-native";
import * as React from "react";
import {Direction as PhoneValidationForm} from "../PhoneValidationForm";
import {shallow} from "enzyme";


test("renders without crashing minimum props", () => {
  shallow(<PhoneValidationForm  varCode=''/>);
});

test("renders without crashing rtl", () => {
  shallow(<PhoneValidationForm  varCode='' isLtr={false}/>);

});

test("renders without crashing ltr", () => {
  shallow(<PhoneValidationForm  varCode='' isLtr/>);
});


test("onPress", () => {
  let varCode = ""; // i guess i could have used sinon here too... less is more i guess
  const onPress = (code) => varCode=code;
  const wrapperPress = shallow(
    <PhoneValidationForm varCode='123456' onPress={onPress} />
  );

  expect(wrapperPress.prop("onPress")).toBe(onPress); // uses the right handler
  expect(varCode).toBe("");
  wrapperPress.simulate("press","123456");
  expect(varCode).toBe("123456");
});

test("onBackButtonPress", () => {
  let i = 0; // i guess i could have used sinon here too... less is more i guess
  const onBackButtonPress = () =>i++ ;
  const wrapperPress = shallow(
    <PhoneValidationForm varCode='' onBackButtonPress={onBackButtonPress} />
  );

  expect(wrapperPress.prop("onBackButtonPress")).toBe(onBackButtonPress); // uses the right handler
  expect(i).toBe(0);
  wrapperPress.simulate("backButtonPress");
  expect(i).toBe(1);
});
