import "react-native";
import * as React from "react";
import {shallow} from "enzyme";
import * as renderer from "react-test-renderer";
import {colorScheme} from "../../../../App/Themes/Colors";
import ChatListItem from '../../../../App/Components/LaunchScreen/ChatsTab/ChatsListItem';
import {ChatsListItemProps}  from '../../../../App/Components/LaunchScreen/ChatsTab/ChatsListItem';

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
