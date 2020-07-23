import React from "react";
import renderer from "react-test-renderer";
import MainEmpty from "./main-empty.jsx";
import {ErrorTypes} from "../../const.js";

const selectedCity = `Paris`;

describe(`MainEmptySnapTest`, () => {
  it(`MainEmpty should render page with out offers`, () => {
    const tree = renderer
    .create(<MainEmpty
      selectedCity = {selectedCity}
      error = {``}
    />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it(`MainEmpty with Network error status should render with notification`, () => {
    const tree = renderer
    .create(<MainEmpty
      selectedCity = {selectedCity}
      error = {ErrorTypes.NETWORK}
    />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
