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
    coords: [52.3909553943508, 4.85309666406198],

  },
  {
    id: 2,
    title: `Wood and stone place`,
    price: 80,
    raiting: 4,
    type: `room`,
    isInBookmark: true,
    isPremium: false,
    coords: [52.369553943508, 4.85309666406198],
  },
  {
    id: 3,
    title: `Canal View Prinsengracht`,
    price: 132,
    raiting: 4,
    type: `apartment`,
    isInBookmark: false,
    isPremium: false,
    coords: [52.3909553943508, 4.929309666406198],
  },
  {
    id: 4,
    title: `Nice, cozy, warm big bed apartment`,
    price: 180,
    raiting: 4,
    type: `apartment`,
    isInBookmark: false,
    isPremium: false,
    coords: [52.3809553943508, 4.939309666406198],
  },
];

const OFFERS_COUNT = 312;

const CITIES = [`Amsterdam`, `Paris`];

const selectedFilter = `Popular`;

const highlightedPinId = -1;

describe(`MainSnapTest`, () => {
  it(`Main with offers should render MainPag with offers list`, () => {
    const tree = renderer
      .create(<Main
        offersCount = {OFFERS_COUNT}
        offers = {OFFERS}
        cities = {CITIES}
        onOfferTitleClick = {() => {}}
        onCityTitleClick = {() => {}}
        selectedCity = {CITIES[0]}
        onCardHoverOn = {() => {}}
        onCardHoverOff = {() => {}}
        selectedFilter = {selectedFilter}
        highlightedPinId = {highlightedPinId}
        onFilterNameClick = {() => {}}
      />,
      {
        createNodeMock: () => document.createElement(`div`)
      })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Main without offers should render MainPage Empty`, () => {
    const tree = renderer
      .create(<Main
        offersCount = {OFFERS_COUNT}
        offers = {[]}
        cities = {CITIES}
        onOfferTitleClick = {() => {}}
        onCityTitleClick = {() => {}}
        selectedCity = {CITIES[0]}
        onCardHoverOn = {() => {}}
        onCardHoverOff = {() => {}}
        selectedFilter = {selectedFilter}
        highlightedPinId = {highlightedPinId}
        onFilterNameClick = {() => {}}
      />,
      {
        createNodeMock: () => document.createElement(`div`)
      })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
