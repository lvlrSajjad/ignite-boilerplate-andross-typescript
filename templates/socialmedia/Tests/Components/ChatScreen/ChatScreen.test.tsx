import "react-native";
import * as React from "react";
import * as renderer from 'react-test-renderer';
import ChatScreen from "../../../App/Components/ChatScreen/ChatScreen";

test("Renders Correctly", () => {
    const tree = renderer.create(<ChatScreen/>).toJSON();
    expect(tree).toMatchSnapshot();
});
