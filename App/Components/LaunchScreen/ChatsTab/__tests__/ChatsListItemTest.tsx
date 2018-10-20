import "react-native";
import * as React from "react";
import {Direction as ChatsListItem} from "../ChatsListItem";
import * as renderer from 'react-test-renderer';
import {colorScheme} from "../../../../Themes/Colors";
import createStore from "../../../../Redux";
import {Provider} from 'react-redux'

test("Renders Correctly", () => {
  const store = createStore();
  const tree = renderer.create(
    <Provider store={store}>
      <ChatsListItem
        avatar={'http://digitalspyuk.cdnds.net/17/25/980x490/landscape-1498216547-avatar-neytiri.jpg'}
        name="test"
        note="test"
        time="test"
        colorScheme={colorScheme(false)}
        isLtr
      /></Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});
