import * as React from "react";
import { storiesOf } from "@storybook/react-native";

import FullButtonLtr from "./FullButton";

storiesOf("FullButton")
  .add("Default", () => (
    <FullButtonLtr
      text="A simple button"
    />
  ))
  .add("Custom Style", () => (
    <FullButtonLtr
      text="Style Me Up!"
      styles={{ backgroundColor: "blue" }}
    />
  ));
