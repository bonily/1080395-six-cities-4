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
    photos: [`img/1.png`, `img/2.png`],
  },
  {
    id: 2,
    title: `Wood and stone place`,
    price: 80,
    raiting: 4,
    type: `room`,
    isInBookmark: true,
    isPremium: false,
    photos: [`img/1.png`, `img/2.png`],
  },
  {
    id: 3,
    title: `Canal View Prinsengracht`,
    price: 132,
    raiting: 4,
    type: `apartment`,
    isInBookmark: false,
    isPremium: false,
    photos: [`img/1.png`, `img/2.png`],
  },
  {
    id: 4,
    title: `Nice, cozy, warm big bed apartment`,
    price: 180,
    raiting: 4,
    type: `house`,
    isInBookmark: false,
    isPremium: false,
    photos: [`img/1.png`, `img/2.png`],
  },
  {
    id: 5,
    title: `Wood and stone place`,
    price: 80,
    raiting: 4,
    type: `hotel`,
    isInBookmark: false,
    isPremium: false,
    photos: [`img/1.png`, `img/2.png`],
  },
];

const CLASSNAME = `near`;

const selectedFilter = `Popular`;

describe(`OfferListSnapTest`, () => {
  it(`OfferList should render list component with offer's cards`, () => {
    const tree = renderer
      .create(<OfferList
        className = {CLASSNAME}
        offers = {OFFERS}
        onOfferTitleClick = {() => {}}
        onCardHoverOn = {() => {}}
        onCardHoverOff = {() => {}}
        selectedFilter = {selectedFilter}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

