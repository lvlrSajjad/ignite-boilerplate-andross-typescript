import "react-native";
import * as React from "react";
import CallsListItem from "../CallsListItem";
import * as renderer from 'react-test-renderer';
import {store} from "../../../../Containers/App";

test("renders correctly" , () => {
  const tree = renderer.create(
    <CallsListItem
      store={store}
      avatar={'http://digitalspyuk.cdnds.net/17/25/980x490/landscape-1498216547-avatar-neytiri.jpg'}
      name={'sajjad'}
      state={2}
      time={'3:30'}
    />).toJSON();
  expect(tree).toMatchSnapshot();
});
