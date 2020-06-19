import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";

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
    type: `apartment`,
    isInBookmark: false,
    isPremium: false,
  },
  {
    id: 5,
    title: `Wood and stone place`,
    price: 80,
    raiting: 4,
    type: `house`,
    isInBookmark: false,
    isPremium: false,
  },
];

const OFFERS_COUNT = 312;

describe(`MainSnapTest`, () => {
  it(`Main should render MainPage`, () => {
    const tree = renderer
      .create(<Main
        offersCount = {OFFERS_COUNT}
        offers = {OFFERS}
        onOfferTitleClick = {() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
