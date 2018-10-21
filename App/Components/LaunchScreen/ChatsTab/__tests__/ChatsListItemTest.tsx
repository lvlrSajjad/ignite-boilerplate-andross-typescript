import "react-native";
import * as React from "react";
import {ChatsListItemProps, Direction as ChatListItem} from '../ChatsListItem';
import {colorScheme} from "../../../../Themes/Colors";
import {shallow} from "enzyme";

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

test("renders without crash with minimum props light", () => {
  shallow(<ChatListItem {...minimumProps}/>)
});

test("renders without crash with minimum props light rtl", () => {
  shallow(<ChatListItem {...minimumProps} isLtr={false}/>)
});

test("renders without crash with minimum props light ltr", () => {
  shallow(<ChatListItem {...minimumProps} isLtr={true}/>)
});
