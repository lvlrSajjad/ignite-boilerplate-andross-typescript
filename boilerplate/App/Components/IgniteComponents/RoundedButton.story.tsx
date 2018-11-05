import * as React from "react";
import { storiesOf } from "@storybook/react-native";

import RoundedButtonRtl from "./RoundedButton";

storiesOf("RoundedButton")
  .add("Default", () => (
    <RoundedButtonRtl
      text="A simple rounded button"
    />
  ))
  .add("Text as children", () => (
    <RoundedButtonRtl>
        Hello from the children!
    </RoundedButtonRtl>
  ));
