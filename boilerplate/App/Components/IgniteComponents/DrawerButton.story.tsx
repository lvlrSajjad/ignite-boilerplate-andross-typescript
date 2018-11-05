import * as React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";

import DrawerButtonLtr from "./DrawerButton";

storiesOf("DrawerButton")
  .add("Default", () => (
    <View style={{ backgroundColor: "black" }}>
      <DrawerButtonLtr
        text="Drawer Button"
        onPress={() => { }}
      />
    </View>
  ));
