import * as React from "react";
import * as Enzyme from "enzyme";
import {configure} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import Main from "./main";
import {City, Offer} from "../../types";
import {noop} from "../../common";

const offers: Offer[] = [
  {
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
  },
  {
    id: 2,
    title: `Wood and stone place`,
    description: ``,
    price: 80,
    raiting: 4,
    bedrooms: 1,
    quests: {
      adults: 2,
      kids: 1
    },
    items: [`Wi Fi`, `Heating`, `Cable TV`, `Dishwasher`],
    type: `room`,
    isInBookmark: true,
    isPremium: false,
    photos: [`img/1.png`, `img/2.png`],
    host: {
      avatar: ``,
      name: `Masha`,
      isSuper: false,
    },
    coords: [52.369553943508, 4.85309666406198],
    city: {
      name: `Amsterdam`,
      coords: [1, 2],
      zoom: 10
    }
  },
  {
    id: 3,
    title: `Canal View Prinsengracht`,
    description: ``,
    price: 132,
    raiting: 4,
    bedrooms: 6,
    quests: {
      adults: 10,
      kids: 5
    },
    items: [`Wi Fi`, `Heating`, `Kitchen`, `Cable TV`, `Fridge`],
    type: `house`,
    isInBookmark: false,
    isPremium: false,
    photos: [`img/1.png`, `img/2.png`],
    host: {
      avatar: `img/avatar-olga.jpg`,
      name: `Olga`,
      isSuper: true,
    },
    coords: [52.3909553943508, 4.929309666406198],
    city: {
      name: `Cologne`,
      coords: [1, 2],
      zoom: 10
    }
  },
  {
    id: 4,
    title: `Nice, cozy, warm big bed apartment`,
    description: ``,
    price: 180,
    raiting: 4,
    bedrooms: 1,
    quests: {
      adults: 2,
      kids: 0
    },
    items: [`Wi-Fi`, `Cable TV`, `Coffee machine`, `Washing machine`],
    type: `hotel`,
    isInBookmark: false,
    isPremium: false,
    photos: [`img/1.png`, `img/2.png`],
    host: {
      avatar: `img/avatar-roma.jpg`,
      name: `Roman`,
      isSuper: false,
    },
    coords: [52.3809553943508, 4.939309666406198],
    city: {
      name: `Barcelona`,
      coords: [1, 2],
      zoom: 10
    }
  },
];

const highlightedPinId = -1;

const selectedFilter = `Popular`;

const selectedCity = `Paris`;

const cities: City[] = [
  {
    name: `Paris`,
    coords: [48.85661, 2.351499],
    zoom: 10
  },
  {
    name: `Amsterdam`,
    coords: [48.85661, 2.351499],
    zoom: 10
  },
];


configure({
  adapter: new Adapter(),
});

describe(`MainE2eTest`, () => {
  it(`Should offer card title be pressed`, () => {
    const onOfferTitleClick = jest.fn();

    const main = Enzyme.mount(
        <Main
          offers = {offers}
          onOfferTitleClick = {onOfferTitleClick}
          onCityTitleClick = {noop}
          selectedCity = {selectedCity}
          selectedFilter = {selectedFilter}
          highlightedPinId = {highlightedPinId}
          onCardHoverOn = {noop}
          onCardHoverOff = {noop}
          onFilterNameClick = {noop}
          authorizationStatus = {``}
          cities = {cities}
          error = {``}
          onChangeFavoriteStatus = {noop}
          onLoadFavoriteOffers = {noop}
          name = {`oliver`}
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

    const main = Enzyme.mount(
        <Main
          offers = {offers}
          onOfferTitleClick = {noop}
          onCityTitleClick = {noop}
          selectedCity = {selectedCity}
          selectedFilter = {selectedFilter}
          highlightedPinId = {highlightedPinId}
          onCardHoverOn = {noop}
          onCardHoverOff = {noop}
          onFilterNameClick = {onFilterTitleClick}
          authorizationStatus = {``}
          cities = {cities}
          error = {``}
          onChangeFavoriteStatus = {noop}
          onLoadFavoriteOffers = {noop}
          name = {`oliver`}
        />
    );

    const filterTitles = main.find(`.places__option`);

    filterTitles.forEach((offerTitle) => {
      onFilterTitleClick.mockClear();
      offerTitle.simulate(`click`);
      expect(onFilterTitleClick).toHaveBeenCalledTimes(1);
    });
  });


  it(`Should user block title be pressed`, () => {
    const onLoadFavoriteOffers = jest.fn();

    const main = Enzyme.mount(
        <Main
          offers = {offers}
          onOfferTitleClick = {noop}
          onCityTitleClick = {noop}
          selectedCity = {selectedCity}
          selectedFilter = {selectedFilter}
          highlightedPinId = {highlightedPinId}
          onCardHoverOn = {noop}
          onCardHoverOff = {noop}
          onFilterNameClick = {noop}
          authorizationStatus = {``}
          cities = {cities}
          error = {``}
          onChangeFavoriteStatus = {noop}
          onLoadFavoriteOffers = {onLoadFavoriteOffers}
          name = {`oliver`}
        />
    );

    const userBlock = main.find(`.header__nav-link`).first();

    userBlock.simulate(`click`, {button: 0});
    expect(onLoadFavoriteOffers).toHaveBeenCalledTimes(1);
  });
});
