import React from "react";
import Enzyme, {mount} from "enzyme";
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

const highlightedPinId = -1;

const selectedFilter = `Popular`;

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`MainE2eTest`, () => {
  it(`Should offer card title be pressed`, () => {
    const onOfferTitleClick = jest.fn();

    const main = mount(
        <Main
          offersCount = {OFFERS_COUNT}
          offers = {OFFERS}
          onOfferTitleClick = {onOfferTitleClick}
          cities = {CITIES}
          onCityTitleClick = {() => {}}
          selectedCity = {CITIES[0]}
          selectedFilter = {selectedFilter}
          highlightedPinId = {highlightedPinId}
          onCardHoverOn = {() => {}}
          onCardHoverOff = {() => {}}
          onFilterNameClick = {() => {}}
        />
    );

    const offerTitles = main.find(`.place-card__name a`);

    offerTitles.forEach((offerTitle) => {
      onOfferTitleClick.mockClear();
      offerTitle.simulate(`click`);
      expect(onOfferTitleClick).toHaveBeenCalledTimes(1);
    });
  });
  it(`Should filter title be pressed`, () => {
    const onFilterTitleClick = jest.fn();

    const main = mount(
        <Main
          offersCount = {OFFERS_COUNT}
          offers = {OFFERS}
          onOfferTitleClick = {() => {}}
          cities = {CITIES}
          onCityTitleClick = {() => {}}
          selectedCity = {CITIES[0]}
          selectedFilter = {selectedFilter}
          highlightedPinId = {highlightedPinId}
          onCardHoverOn = {() => {}}
          onCardHoverOff = {() => {}}
          onFilterNameClick = {onFilterTitleClick}
        />
    );

    const filterTitles = main.find(`.places__option`);

    filterTitles.forEach((offerTitle) => {
      onFilterTitleClick.mockClear();
      offerTitle.simulate(`click`);
      expect(onFilterTitleClick).toHaveBeenCalledTimes(1);
    });
  });
});
