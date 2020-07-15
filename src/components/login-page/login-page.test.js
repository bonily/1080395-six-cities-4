import React from "react";
import renderer from "react-test-renderer";
import LoginPage from "./login-page.jsx";


describe(`LoginPageSnapTest`, () => {
  it(`LoginPage should render autohrization page`, () => {
    const tree = renderer
      .create(<LoginPage

      />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
