import * as React from "react";
import * as renderer from "react-test-renderer";
import MainEmpty from "./main-empty";
import {ErrorTypes} from "../../const";

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
