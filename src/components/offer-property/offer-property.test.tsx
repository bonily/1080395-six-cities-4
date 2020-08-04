import * as React from "react";
import * as renderer from "react-test-renderer";
import OfferProperty from "./offer-property";
import {ErrorTypes} from "../../const";
import {noop} from "../../common";
import {Offer, Review} from "../../types";

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

const enum AuthorizationStatus {
  AUTH =`AUTH`,
  NO_AUTH =`NO_AUTH`
}

const reviews: Review [] = [
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
  }];

const routeProps: {match: {
  params: {
    id: number;
    };
  };
  history: {
    action: string;
  };
  } = {
    match: {
      params: {
        id: offers[0].id,
      }},
    history: {
      action: `POP`}
  };

describe(`OfferPropertySnapTest`, () => {
  it(`OfferProperty for authorized user should render offer page with place for user review`, () => {
    const tree = renderer
      .create(<OfferProperty
        nearOffers = {offers}
        offers = {offers}
        onOfferTitleClick = {noop}
        onCardHoverOn = {noop}
        onCardHoverOff = {noop}
        authorizationStatus = {AuthorizationStatus.AUTH}
        userName = {`oliver@SpeechGrammarList.com`}
        reviews = {reviews}
        onReviewFormSubmit = {noop}
        error = {``}
        onChangeFavoriteStatus = {noop}
        routeProps = {routeProps}
        onLoadFavoriteOffers = {noop}
        onLoadAllOfferData = {noop}
      />,
      {
        createNodeMock: () => document.createElement(`div`)
      })
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it(`OfferProperty for unauthorized user should render offer page without place for user review`, () => {
    const tree = renderer
      .create(<OfferProperty
        nearOffers = {offers}
        offers = {offers}
        onOfferTitleClick = {noop}
        onCardHoverOn = {noop}
        onCardHoverOff = {noop}
        authorizationStatus = {AuthorizationStatus.NO_AUTH}
        reviews = {reviews}
        onReviewFormSubmit = {noop}
        error = {``}
        onChangeFavoriteStatus = {noop}
        routeProps = {routeProps}
        onLoadFavoriteOffers = {noop}
        onLoadAllOfferData = {noop}
        userName = {`oliver@SpeechGrammarList.com`}
      />,
      {
        createNodeMock: () => document.createElement(`div`)
      })
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it(`OfferProperty with Network error should render page with specilak notification`, () => {
    const tree = renderer
      .create(<OfferProperty
        nearOffers = {offers}
        offers = {offers}
        onOfferTitleClick = {noop}
        onCardHoverOn = {noop}
        onCardHoverOff = {noop}
        authorizationStatus = {AuthorizationStatus.AUTH}
        userName = {`oliver@SpeechGrammarList.com`}
        reviews = {reviews}
        onReviewFormSubmit = {noop}
        error = {ErrorTypes.NETWORK}
        onChangeFavoriteStatus = {noop}
        routeProps = {routeProps}
        onLoadFavoriteOffers = {noop}
        onLoadAllOfferData = {noop}
      />,
      {
        createNodeMock: () => document.createElement(`div`)
      })
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});


