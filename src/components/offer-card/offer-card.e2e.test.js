import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import OfferCard from "./offer-card";

const OFFER = {
  id: 5,
  title: `Beautiful &amp; luxurious apartment at great location`,
  price: 120,
  raiting: 4,
  type: `apartment`,
  isInBookmark: false,
  isPremium: true,
  photos: [`img/1.png`, `img/2.png`],
};

const CLASSNAME = `near`;

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`OfferCardE2eTest`, () => {
  it(`Should card hover on works correctly`, () => {
    const onCardHoverOn = jest.fn();

    const offerCard = shallow(
        <OfferCard
          offer = {OFFER}
          onOfferTitleClick = {() => {}}
          className = {CLASSNAME}
          onCardHoverOn = {onCardHoverOn}
          onCardHoverOff = {() => {}}
          changeFavoriteStatus = {() => {}}
          onFavoriteStatusChange = {() => {}}
          isInBookmark = {true}
        />
    );

    const card = offerCard.find(`.place-card`);

    card.simulate(`mouseEnter`);

    expect(onCardHoverOn).toHaveBeenCalledTimes(1);
    expect(onCardHoverOn.mock.calls[0][0]).toBe(OFFER.id);
  });

  it(`Should card hover off works correctly`, () => {
    const onCardHoverOff = jest.fn();

    const offerCard = shallow(
        <OfferCard
          offer = {OFFER}
          onOfferTitleClick = {() => {}}
          className = {CLASSNAME}
          onCardHoverOff = {onCardHoverOff}
          onCardHoverOn = {() => {}}
          changeFavoriteStatus = {() => {}}
          onFavoriteStatusChange = {() => {}}
          isInBookmark = {true}
        />
    );

    const card = offerCard.find(`.place-card`);

    card.simulate(`mouseLeave`);
    expect(onCardHoverOff).toHaveBeenCalledTimes(1);
    expect(onCardHoverOff.mock.calls[0][0]).not.toBeDefined();
  });

  it(`Should offer card title be pressed`, () => {
    const onOfferTitleClick = jest.fn();

    const offerCard = shallow(
        <OfferCard
          offer = {OFFER}
          onOfferTitleClick = {onOfferTitleClick}
          className = {CLASSNAME}
          onCardHoverOff = {() => {}}
          onCardHoverOn = {() => {}}
          changeFavoriteStatus = {() => {}}
          onFavoriteStatusChange = {() => {}}
          isInBookmark = {true}
        />
    );

    const offerTitle = offerCard.find(`.place-card__name a`);

    offerTitle.simulate(`click`);
    expect(onOfferTitleClick.mock.calls[0][0]).toBe(OFFER.id);
  });
});

