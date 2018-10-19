import "react-native";
import * as React from "react";
import PhoneValidationForm from "../PhoneValidationForm";
import * as renderer from 'react-test-renderer';

test("AlertMessage component renders correctly if show is true", () => {
  const tree = renderer.create(<PhoneValidationForm title="howdy" />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("AlertMessage component does not render if show is false", () => {
  const tree = renderer.create(<PhoneValidationForm title="howdy" show={false} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("AlertMessage component renders correctly if backgroundColor prop is set", () => {
  const tree = renderer.create(<PhoneValidationForm title="howdy" style={{ backgroundColor: "red" }} />).toJSON();
  expect(tree).toMatchSnapshot();
});
