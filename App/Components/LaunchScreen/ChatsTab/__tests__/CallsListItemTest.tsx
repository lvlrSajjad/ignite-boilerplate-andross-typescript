import "react-native";
import * as React from "react";
import  CallsListItemRtl from "../CallsListItem/CallsListItem.rtl";
import CallsListItemLtr from "../CallsListItem/CallsListItem.ltr";

import * as renderer from 'react-test-renderer';
import {colorScheme} from "../../../../Themes/Colors";

test("Renders Correctly" , () => {

  const tree = renderer.create(<CallsListItemRtl
      avatar={'http://digitalspyuk.cdnds.net/17/25/980x490/landscape-1498216547-avatar-neytiri.jpg'}
      name={'sajjad'}
      state={2}
      time={'3:30'}
      colorScheme={colorScheme(false)}
      isLtr={true}
      isDarkMode={false}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("Renders Correctly" , () => {

  const tree = renderer.create(<CallsListItemLtr
    avatar={'http://digitalspyuk.cdnds.net/17/25/980x490/landscape-1498216547-avatar-neytiri.jpg'}
    name={'sajjad'}
    state={2}
    time={'3:30'}
    colorScheme={colorScheme(false)}
    isLtr={true}
    isDarkMode={false}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
