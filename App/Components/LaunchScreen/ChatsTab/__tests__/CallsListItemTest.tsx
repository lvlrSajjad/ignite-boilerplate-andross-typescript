import "react-native";
import * as React from "react";
import {Direction as CallsListItem} from "../CallsListItem";
import * as renderer from 'react-test-renderer';
import {colorScheme} from "../../../../Themes/Colors";
import createStore from "../../../../Redux";
import {Provider} from 'react-redux'

test("Renders Correctly" , () => {
  const store = createStore();

  const tree = renderer.create(<Provider store={store}><CallsListItem
      avatar={'http://digitalspyuk.cdnds.net/17/25/980x490/landscape-1498216547-avatar-neytiri.jpg'}
      name={'sajjad'}
      state={2}
      time={'3:30'}
      colorScheme={colorScheme(false)}
      isLtr={true}
      isDarkMode={false}
  /></Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});
