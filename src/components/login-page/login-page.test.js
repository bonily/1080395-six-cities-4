import React from "react";
import renderer from "react-test-renderer";
import LoginPage from "./login-page.jsx";
import {ErrorTypes} from "../../const";


describe(`LoginPageSnapTest`, () => {
  it(`LoginPage should render autohrization page`, () => {
    const tree = renderer
      .create(<LoginPage
        onUserBlockClick = {() => {}}
        onAuthFormSubmit = {() => {}}
        error = {``}
      />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`LoginPage with bad response should render error block`, () => {
    const tree = renderer
      .create(<LoginPage
        onUserBlockClick = {() => {}}
        onAuthFormSubmit = {() => {}}
        error = {ErrorTypes.BAD_REQUEST}
      />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
