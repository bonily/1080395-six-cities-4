import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
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
const CLASSNAME = `near`;

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`OfferListE2eTest`, () => {
  it(`_handleCarHover() should change offer list state (current card id in state)`, () => {

    const offerList = shallow(
        <OfferList
          className = {CLASSNAME}
          offers = {OFFERS}
          onCardHover = {() => {}}
          onOfferTitleClick = {() => {}}
        />
    );
    OFFERS.forEach((offer) => {
      const id = offer.id;
      offerList.instance()._handleCardHover(id);
      expect(offerList.state(`idCard`)).toEqual(id);
    });
  });
});


