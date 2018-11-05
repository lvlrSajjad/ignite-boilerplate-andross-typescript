import "react-native";
import * as React from "react";
import {CallsListItemProps, Direction as CallsListItem} from "../CallsListItem";
import { colorScheme} from "../../../../Themes/Colors";
import {shallow} from "enzyme";
import * as renderer from "react-test-renderer";

const minimumProps: CallsListItemProps ={
  avatar: '',
  name: '',
  state: 1,
  time: ''
};

test("renders without crashing with minimum props Dark" , () => {

  shallow(<CallsListItem
    {...minimumProps}
    colorScheme={colorScheme(true)}
  />);
});

test("renders without crashing with minimum props Dark snapshot", () => {
  const tree = renderer.create(<CallsListItem
    {...minimumProps}
    colorScheme={colorScheme(true)}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders without crashing with minimum props Light" , () => {

  shallow(<CallsListItem
    {...minimumProps}
    colorScheme={colorScheme(false)}
  />);
});

test("renders without crashing with minimum props Light Rtl" , () => {

  shallow(<CallsListItem
    {...minimumProps}
    isRtl
    colorScheme={colorScheme(false)}
  />);
});

test("renders without crashing with minimum props Light unpredicted state" , () => {

  shallow(<CallsListItem
    {...minimumProps}
    state={10}
  />);
});

