import * as React from "react";
import { storiesOf } from "@storybook/react-native";

import AlertMessageLtr from "./AlertMessage";

storiesOf("AlertMessage")
  .add("Default", () => (
    <AlertMessageLtr
      title="ALERT ALERT"
    />
  ))
  .add("Hidden", () => (
    <AlertMessageLtr
      title="ALERT ALERT"
      show={false}
    />
  ))
  .add("Custom Style", () => (
    <AlertMessageLtr
      title="ALERT ALERT"
      style={{ backgroundColor: "red" }}
    />
  ));
