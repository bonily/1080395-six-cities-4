import React from "react";
import renderer from "react-test-renderer";
import MainEmpty from "./main-empty.jsx";

describe(`MainEmptySnapTest`, () => {
  it(`MainEmpty should render page with out offers`, () => {
    const tree = renderer
    .create(<MainEmpty />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
