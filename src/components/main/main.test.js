import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";

const OFFERS = [
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
];
const highlightedPinId = -1;

const selectedFilter = `Popular`;

const selectedCity = `Paris`;

const NAME = `Igor`;

const cities = [
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

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`
};

describe(`MainSnapTest`, () => {
  it(`Main with offers should render MainPag with offers list`, () => {
    const tree = renderer
      .create(<Main
        offers = {OFFERS}
        onOfferTitleClick = {() => {}}
        onCityTitleClick = {() => {}}
        selectedCity = {selectedCity}
        onCardHoverOn = {() => {}}
        onCardHoverOff = {() => {}}
        selectedFilter = {selectedFilter}
        highlightedPinId = {highlightedPinId}
        onFilterNameClick = {() => {}}
        authorizationStatus = {AuthorizationStatus.AUTH}
        name = {NAME}
        onUserBlockClick = {() => {}}
        cities = {cities}
        error = {``}
      />,
      {
        createNodeMock: () => document.createElement(`div`)
      })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Main without offers should render MainPage Empty`, () => {
    const tree = renderer
      .create(<Main
        offers = {OFFERS}
        onOfferTitleClick = {() => {}}
        onCityTitleClick = {() => {}}
        selectedCity = {`Paris`}
        onCardHoverOn = {() => {}}
        onCardHoverOff = {() => {}}
        selectedFilter = {selectedFilter}
        highlightedPinId = {highlightedPinId}
        onFilterNameClick = {() => {}}
        authorizationStatus = {AuthorizationStatus.NO_AUTH}
        onUserBlockClick = {() => {}}
        cities = {cities}
        error = {``}
      />,
      {
        createNodeMock: () => document.createElement(`div`)
      })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`Main without autorization user shaoul render header with sign in block`, () => {
    const tree = renderer
      .create(<Main
        offers = {OFFERS}
        onOfferTitleClick = {() => {}}
        onCityTitleClick = {() => {}}
        selectedCity = {`Paris`}
        onCardHoverOn = {() => {}}
        onCardHoverOff = {() => {}}
        selectedFilter = {selectedFilter}
        highlightedPinId = {highlightedPinId}
        onFilterNameClick = {() => {}}
        authorizationStatus = {AuthorizationStatus.NO_AUTH}
        onUserBlockClick = {() => {}}
        cities = {cities}
        error = {``}
      />,
      {
        createNodeMock: () => document.createElement(`div`)
      })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`Main with autorization user should render header with user block`, () => {
    const tree = renderer
      .create(<Main
        offers = {OFFERS}
        onOfferTitleClick = {() => {}}
        onCityTitleClick = {() => {}}
        selectedCity = {`Paris`}
        onCardHoverOn = {() => {}}
        onCardHoverOff = {() => {}}
        selectedFilter = {selectedFilter}
        highlightedPinId = {highlightedPinId}
        onFilterNameClick = {() => {}}
        authorizationStatus = {AuthorizationStatus.AUTH}
        name = {NAME}
        onUserBlockClick = {() => {}}
        cities = {cities}
        error = {``}
      />,
      {
        createNodeMock: () => document.createElement(`div`)
      })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
