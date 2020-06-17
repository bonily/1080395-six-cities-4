import React from "react";
import renderer from "react-test-renderer";
import OfferList from "./offer-list";

const OFFERS = [
  {
    id: 1,
    description: `Beautiful &amp; luxurious apartment at great location`,
    price: 120,
    raiting: 4,
    type: `apartment`,
    isInBookmark: false,
    isPremium: true,
  },
  {
    id: 2,
    description: `Wood and stone place`,
    price: 80,
    raiting: 4,
    type: `private room`,
    isInBookmark: true,
    isPremium: false,
  },
  {
    id: 3,
    description: `Canal View Prinsengracht`,
    price: 132,
    raiting: 4,
    type: `apartment`,
    isInBookmark: false,
    isPremium: false,
  },
  {
    id: 4,
    description: `Nice, cozy, warm big bed apartment`,
    price: 180,
    raiting: 4,
    type: `apartment`,
    isInBookmark: false,
    isPremium: false,
  },
  {
    id: 5,
    description: `Wood and stone place`,
    price: 80,
    raiting: 4,
    type: `private room`,
    isInBookmark: false,
    isPremium: false,
  },
];

describe(`OfferListSnapTest`, () => {
  it(`OfferList should render list component with offer's cards`, () => {
    const tree = renderer
      .create(<OfferList
        offers = {OFFERS}
        onOfferTitleClick = {() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

