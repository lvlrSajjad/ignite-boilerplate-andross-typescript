// @flow

import * as React from "react";
import { View, Text } from "react-native";
import I18n from "react-native-i18n";
import ExamplesRegistry from "../../../App/Services/ExamplesRegistry";

// Example
ExamplesRegistry.addPluginExample("I18n", () => (
  <View>
    <Text style={{ color: "#ffffff" }}>
Locale:
      {I18n.defaultLocale}
    </Text>
  </View>
));
