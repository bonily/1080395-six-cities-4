import * as React from "react";
import {configure, shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import OfferCard from "./offer-card";
import {noop} from "../../common";
import {Offer} from "../../types";


const offer: Offer = {
  id: 1,
  title: `Beautiful & luxurious apartment at great location`,
  description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
  price: 120,
  raiting: 4,
  bedrooms: 3,
  quests: {
    adults: 5,
    kids: 2
  },
  items: [`Wi-Fi`, `Heating`, `Kitchen`, `Cable TV`, `Baby seat`, `Dishwasher`, `Washing machine`],
  type: `apartment`,
  isInBookmark: false,
  isPremium: true,
  photos: [`img/1.png`, `img/2.png`],
  host: {
    avatar: `img/avatar-angelina.jpg`,
    name: `Angelina`,
    isSuper: true,
  },
  coords: [52.3909553943508, 4.85309666406198],
  city: {
    name: `Paris`,
    coords: [1, 2],
    zoom: 10
  }
};

const className = `near`;

configure({
  adapter: new Adapter(),
});

describe(`OfferCardE2eTest`, () => {
  it(`Should card hover on works correctly`, () => {
    const onCardHoverOn = jest.fn();

    const offerCard = shallow(
        <OfferCard
          offer = {offer}
          onOfferTitleClick = {noop}
          nameClass = {className}
          onCardHoverOn = {onCardHoverOn}
          onCardHoverOff = {noop}
          onChangeFavoriteStatus = {noop}
          onFavoriteStatusChange = {noop}
          isInBookmark = {true}
        />
    );

    const card = offerCard.find(`.place-card`);

    card.simulate(`mouseEnter`);

    expect(onCardHoverOn).toHaveBeenCalledTimes(1);
    expect(onCardHoverOn.mock.calls[0][0]).toBe(offer.id);
  });

  it(`Should card hover off works correctly`, () => {
    const onCardHoverOff = jest.fn();

    const offerCard = shallow(
        <OfferCard
          offer = {offer}
          onOfferTitleClick = {noop}
          nameClass = {className}
          onCardHoverOff = {onCardHoverOff}
          onCardHoverOn = {noop}
          onChangeFavoriteStatus = {noop}
          onFavoriteStatusChange = {noop}
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
          offer = {offer}
          onOfferTitleClick = {onOfferTitleClick}
          nameClass = {className}
          onCardHoverOff = {noop}
          onCardHoverOn = {noop}
          onChangeFavoriteStatus = {noop}
          onFavoriteStatusChange = {noop}
          isInBookmark = {true}
        />
    );

    const offerTitle = offerCard.find(`.place-card__name-link`);

    offerTitle.simulate(`click`);
    expect(onOfferTitleClick.mock.calls[0][0]).toBe(offer.id);
  });
});

