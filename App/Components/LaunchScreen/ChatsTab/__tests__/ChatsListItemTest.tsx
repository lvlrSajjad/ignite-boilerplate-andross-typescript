import "react-native";
import * as React from "react";
import  ChatsListItemLtr from "../ChatsListItem/ChatsListItem.ltr";
import ChatsListItemRtl from "../ChatsListItem/ChatsListItem.rtl";

import * as renderer from 'react-test-renderer';
import {colorScheme} from "../../../../Themes/Colors";

test("Renders Correctly", () => {
  const tree = renderer.create(

      <ChatsListItemLtr
        avatar={'http://digitalspyuk.cdnds.net/17/25/980x490/landscape-1498216547-avatar-neytiri.jpg'}
        name="test"
        note="test"
        time="test"
        colorScheme={colorScheme(false)}
        isLtr
      />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("Renders Correctly", () => {
  const tree = renderer.create(

    <ChatsListItemRtl
      avatar={'http://digitalspyuk.cdnds.net/17/25/980x490/landscape-1498216547-avatar-neytiri.jpg'}
      name="test"
      note="test"
      time="test"
      colorScheme={colorScheme(false)}
      isLtr
    />).toJSON();
  expect(tree).toMatchSnapshot();
});
