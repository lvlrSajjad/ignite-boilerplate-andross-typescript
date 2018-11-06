import "react-native";
import * as React from "react";
import {LoginCard as LoginCard} from "../LoginCard";
import {shallow} from "enzyme";

test("renders without crash without props", () => {
  shallow(<LoginCard/>);});

test("renders without crash with step props", () => {
  shallow(<LoginCard step={1}/>);
  shallow(<LoginCard step={2}/>);
  shallow(<LoginCard step={3}/>);
});
