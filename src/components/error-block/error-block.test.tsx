import * as React from "react";
import * as renderer from "react-test-renderer";
import ErrorBlock from "./error-block";

describe(`ErrorBlockSnapTest`, () => {
  it(`Errror Block should render block with error information`, () => {
    const tree = renderer
      .create(<ErrorBlock
      />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
