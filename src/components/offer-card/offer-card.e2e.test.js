import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import OfferCard from "./offer-card";

const OFFER = {
  id: 5,
  description: `Beautiful &amp; luxurious apartment at great location`,
  price: 120,
  raiting: 4,
  type: `apartment`,
  isInBookmark: false,
  isPremium: true,
};

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`OfferCardE2eTest`, () => {
  it(`Should card hover works`, () => {
    const onCardHover = jest.fn();

    const offerCard = shallow(
        <OfferCard
          offer = {OFFER}
          onOfferTitleClick = {() => {}}
          onCardHover = {onCardHover}
        />
    );

    const card = offerCard.find(`.place-card`);

    card.simulate(`mouseEnter`);
    card.simulate(`mouseLeave`);

    expect(onCardHover).toHaveBeenCalledTimes(2);
  });

  it(`Should cardHoverHandler works correctly`, () => {
    const onCardHover = jest.fn();

    const offerCard = shallow(
        <OfferCard
          offer = {OFFER}
          onOfferTitleClick = {() => {}}
          onCardHover = {onCardHover}
        />
    );

    const card = offerCard.find(`.place-card`);

    card.simulate(`mouseEnter`);
    expect(onCardHover.mock.calls[0][0]).toBe(OFFER.id);
  });

  it(`Should offer card title be pressed`, () => {
    const onOfferTitleClick = jest.fn();

    const offerCard = shallow(
        <OfferCard
          offer = {OFFER}
          onOfferTitleClick = {onOfferTitleClick}
          onCardHover = {() => {}}
        />
    );

    const offerTitle = offerCard.find(`.place-card__name a`);

    offerTitle.simulate(`click`);
    expect(onOfferTitleClick).toHaveBeenCalledTimes(1);
  });
});

