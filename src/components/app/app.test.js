import React from "react";
import renderer from "react-test-renderer";
import App from "./app";

const offers = [
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
const offersCount = 312;

describe(`AppSnapTest`, () => {
  it(`App should render MainPage`, () => {
    const tree = renderer
      .create(<App
        offersCount = {offersCount}
        offers = {offers}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
