import "react-native";
import * as React from "react";
import {Direction as UserInfoForm} from "../UserInfoForm";
import {shallow} from "enzyme";

test("renders without crashing minimum props", () => {
  shallow(<UserInfoForm  userName=''/>);
});

test("renders without crashing rtl", () => {
  shallow(<UserInfoForm  userName='' isRtl/>);
});
