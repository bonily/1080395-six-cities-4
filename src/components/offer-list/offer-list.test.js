import React from "react";
import renderer from "react-test-renderer";
import OfferList from "./offer-list";

const OFFERS = [
  {
    id: 1,
    title: `Beautiful &amp; luxurious apartment at great location`,
    price: 120,
    raiting: 4,
    type: `apartment`,
    isInBookmark: false,
    isPremium: true,
  },
  {
    id: 2,
    title: `Wood and stone place`,
    price: 80,
    raiting: 4,
    type: `room`,
    isInBookmark: true,
    isPremium: false,
  },
  {
    id: 3,
    title: `Canal View Prinsengracht`,
    price: 132,
    raiting: 4,
    type: `apartment`,
    isInBookmark: false,
    isPremium: false,
  },
  {
    id: 4,
    title: `Nice, cozy, warm big bed apartment`,
    price: 180,
    raiting: 4,
    type: `house`,
    isInBookmark: false,
    isPremium: false,
  },
  {
    id: 5,
    title: `Wood and stone place`,
    price: 80,
    raiting: 4,
    type: `hotel`,
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

