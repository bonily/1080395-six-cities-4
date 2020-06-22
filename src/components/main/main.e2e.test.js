import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
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
    type: `private room`,
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
    type: `private room`,
    isInBookmark: false,
    isPremium: false,
  },
];

const OFFERS_COUNT = 312;

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`MainE2eTest`, () => {
  it(`Should offer card title be pressed`, () => {
    const onOfferTitleClick = jest.fn();

    const main = shallow(
        <Main
          offersCount = {OFFERS_COUNT}
          offers = {OFFERS}
          onOfferTitleClick = {onOfferTitleClick}
        />
    );

    const offerTitles = main.find(`.place-card__name a`);

    offerTitles.forEach((offerTitle) => {
      onOfferTitleClick.mockClear();
      offerTitle.simulate(`click`);
      expect(onOfferTitleClick).toHaveBeenCalledTimes(1);
    });
  });
});
