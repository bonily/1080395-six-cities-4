import * as React from "react";
import renderer from "react-test-renderer";
import MapProperty from "./map-property";

const OFFERS = [
  {
    id: 1,
    coords: [52.3909553943508, 4.85309666406198],
  },
  {
    id: 2,
    coords: [52.369553943508, 4.85309666406198],
  },
  {
    id: 3,
    coords: [52.3909553943508, 4.929309666406198],
  },
  {
    id: 4,
    coords: [52.3809553943508, 4.939309666406198],
  },
];

describe(`MapPropertySnapTest`, () => {
  it(`Map should render map on property page component with pins`, () => {
    const tree = renderer
      .create(<MapProperty
        offers = {OFFERS.slice(-3)}
        currentOffer = {OFFERS[0]}
        highlightedPinId = {OFFERS[0].id}
      />,
      {
        createNodeMock: () => document.createElement(`div`)
      }
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
