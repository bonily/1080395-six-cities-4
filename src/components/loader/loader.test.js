import React from "react";
import renderer from "react-test-renderer";
import Loader from "./loader";


describe(`LoaderSnapTest`, () => {
  it(`Loader component should render loader div`, () => {
    const tree = renderer
      .create(<Loader
      />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
