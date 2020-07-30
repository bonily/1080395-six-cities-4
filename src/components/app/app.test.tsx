import * as React from "react";
import * as renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {App} from "./app";
import {noop} from "../../common";
import {City, Offer, Review} from "../../types";
import NameSpace from "../../reducer/name-space";

const mockStore = configureStore([]);

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

const selectedCity: string = `Paris`;

const highlightedPinId: number = -1;

const selectedFilter: string= `Popular`;

const enum AuthorizationStatus {
  AUTH =`AUTH`,
  NO_AUTH =`NO_AUTH`
};

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

const favoriteOffers: {[key: string] : Offer[]}= {
  Paris: [
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
        avatar: `img/avatar-max.jpg`,
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
    }]
};

const reviews: Review[] =  [
  {
    user: {
      name: `Max`,
      avatarUrl: `img/avatar-max.jpg`,
      rating: 4
    },
    rating: 4,
    comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    date: `2019-04-24`,
    id: 1,
  },
  {
    user: {
      name: `Igor`,
      avatarUrl: `img/avatar-max.jpg`,
      rating: 3
    },
    rating: 3,
    comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    date: `2019-06-21`,
    id: 2,
  }
];

const userName: string = `oliver@gmail.com`;

describe(`AppSnapTest`, () => {
  it(`App without authorization status should render MainPage with Sign in Link`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        selectedCity: selectedCity,
        offers: offers,
        allOffers: offers,
        nearOffers: offers,
        favoriteOffers: favoriteOffers,
        cities: cities
      },
      [NameSpace.STATE]: {
        selectedFilter: selectedFilter,
        highlightedPinId: highlightedPinId,
      },
      [NameSpace.USER]: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        name: userName,
        id: -1
      },
      [NameSpace.REVIEW]: {
        reviews: reviews
      }

    })
    const tree = renderer
      .create(
      <Provider store={store}>
        <App
        onOfferTitleClick = {noop}
        onCityTitleClick = {noop}
        onFilterNameClick = {noop}
        onCardHoverOn = {noop}
        onCardHoverOff = {noop}
        onAuthFormSubmit = {noop}
        onReviewFormSubmit = {noop}
        changeFavoriteStatus = {noop}
        loadFavoriteOffers = {noop}
        offers = {offers}
        allOffers = {offers}
        nearOffers = {offers}
        favoriteOffers = {favoriteOffers}
        selectedCity = {selectedCity}
        cities = {cities}
        selectedFilter = {selectedFilter}
        highlightedPinId = {highlightedPinId}
        authorizationStatus = {AuthorizationStatus.NO_AUTH}
        userName = {userName}
        reviews = {reviews}
        error = {``}
        loadAllOffersData = {noop}
      />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          })

      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  // it(`App with authorization status should render MainPage with Sign in Link`, () => {
  //   const tree = renderer
  //     .create(<App
  //       selectedCity = {selectedCity}
  //       allOffers = {offers}
  //       offers = {offers}
  //       nearOffers = {offers}
  //       favoriteOffers = {favoriteOffers}
  //       onOfferTitleClick = {() => {}}
  //       onCityTitleClick = {() => {}}
  //       onFilterNameClick = {() => {}}
  //       selectedFilter = {selectedFilter}
  //       highlightedPinId = {highlightedPinId}
  //       onCardHoverOn = {() => {}}
  //       onCardHoverOff = {() => {}}
  //       currentOfferId = {-1}
  //       authorizationStatus = {AuthorizationStatus.NO_AUTH}
  //       cities = {cities}
  //       currentPage = {`main`}
  //       onAuthFormSubmit = {() => {}}
  //       reviews = {reviews}
  //       userId = {2}
  //       onReviewFormSubmit = {() => {}}
  //       error = {``}
  //       name = {userName}
  //       changeFavoriteStatus = {() => {}}
  //       loadFavoriteOffers = {() => {}}
  //     />,
  //     {
  //       createNodeMock: () => document.createElement(`div`)
  //     }
  //     )
  //     .toJSON();

  //   expect(tree).toMatchSnapshot();
  // });
});
