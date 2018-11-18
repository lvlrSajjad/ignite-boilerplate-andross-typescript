import "react-native";
import * as React from "react";
import {ChatsListItemProps, Direction as ChatListItem} from '../ChatsListItem/index';
import {colorScheme} from "../../../../Themes/Colors";
import {shallow} from "enzyme";
import * as renderer from "react-test-renderer";

const minimumProps:ChatsListItemProps = {
  avatar: '',
  name: '',
  note: '',
  time: '',
  colorScheme: colorScheme(false)
};


test("renders without crash with minimum props dark", () => {
  shallow(<ChatListItem {...minimumProps} colorScheme={colorScheme(true)}/>)
});

test("renders without crashing with minimum props Dark snapshot", () => {
  const tree = renderer.create(<ChatListItem
    {...minimumProps}
    colorScheme={colorScheme(true)}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders without crash with minimum props light", () => {
  shallow(<ChatListItem {...minimumProps}/>)
});

test("renders without crash with minimum props light rtl", () => {
  shallow(<ChatListItem {...minimumProps} isRtl />)
});
