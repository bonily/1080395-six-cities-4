import * as React from "react";
import * as renderer from "react-test-renderer";
import LoginPage from "./login-page";
import {ErrorTypes} from "../../const";
import {noop} from "../../common";


describe(`LoginPageSnapTest`, () => {
  it(`LoginPage should render autohrization page`, () => {
    const tree = renderer
      .create(<LoginPage
        onAuthFormSubmit = {noop}
        error = {``}
      />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`LoginPage with bad response should render error block`, () => {
    const tree = renderer
      .create(<LoginPage
        onAuthFormSubmit = {noop}
        error = {ErrorTypes.BAD_REQUEST}
      />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
