import * as React from "react";
import * as renderer from "react-test-renderer";
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

describe(`OfferSnapTest`, () => {
  it(`OfferCard should render offer card component`, () => {
    const tree = renderer
      .create(<OfferCard
        offer = {offer}
        onOfferTitleClick = {noop}
        onCardHoverOn = {noop}
        onCardHoverOff = {noop}
        nameClass = {className}
        isInBookmark = {true}
        changeFavoriteStatus = {noop}
        onFavoriteStatusChange = {noop}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
