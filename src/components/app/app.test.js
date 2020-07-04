import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app";

const offers = {
  Amsterdam: [
    {
      id: 1,
      title: `Beautiful & luxurious apartment at great location`,
      description: [`A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`, `The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`],
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
      photos: [],
      host: {
        avatar: `img/avatar-angelina.jpg`,
        name: `Angelina`,
        isSuper: true,
      },
      coords: [52.3909553943508, 4.85309666406198],
    },
    {
      id: 2,
      title: `Wood and stone place`,
      description: [],
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
      photos: [],
      host: {
        avatar: ``,
        name: `Masha`,
        isSuper: false,
      },
      coords: [52.369553943508, 4.85309666406198],
    },
  ],
  Paris: [
    {
      id: 3,
      title: `Canal View Prinsengracht`,
      description: [],
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
      photos: [],
      host: {
        avatar: ``,
        name: `Olga`,
        isSuper: true,
      },
      coords: [52.3909553943508, 4.929309666406198],
    },
    {
      id: 4,
      title: `Nice, cozy, warm big bed apartment`,
      description: [],
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
      photos: [],
      host: {
        avatar: ``,
        name: `Roman`,
        isSuper: false,
      },
      coords: [52.3809553943508, 4.939309666406198],
    },
  ]
};

const selectedCity = `Paris`;

const highlightedPinId = -1;

const selectedFilter = `Popular`;

const currentOfferId = -1;

describe(`AppSnapTest`, () => {
  it(`App should render MainPage`, () => {
    const tree = renderer
      .create(<App
        selectedCity = {selectedCity}
        offers = {offers}
        onOfferTitleClick = {() => {}}
        onCityTitleClick = {() => {}}
        onFilterNameClick = {() => {}}
        selectedFilter = {selectedFilter}
        highlightedPinId = {highlightedPinId}
        onCardHoverOn = {() => {}}
        onCardHoverOff = {() => {}}
        currentOfferId = {currentOfferId}
      />,
      {
        createNodeMock: () => document.createElement(`div`)
      }
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
