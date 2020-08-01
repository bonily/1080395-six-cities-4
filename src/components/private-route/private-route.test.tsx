import * as React from "react";
import * as renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {PrivateRoute} from "./private-route";
import {noop} from "../../common";
import NameSpace from "../../reducer/name-space";
import Favorite from "../favorite/favorite";
import {Offer} from "../../types";
import {AppRoute} from "../../const";
import { Router, MemoryRouter } from "react-router-dom";
import history from "../../history.js";


const mockStore = configureStore([]);

const enum AuthorizationStatus {
  AUTH =`AUTH`,
  NO_AUTH =`NO_AUTH`
}
const userName = `oliver@gmail.com`;

const favoriteOffers: {[key: string]: Offer[]} = {
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

const render = () => {
  return (
    <Favorite
      authorizationStatus = {AuthorizationStatus.AUTH}
      onOfferTitleClick = {noop}
      name = {userName}
      changeFavoriteStatus = {noop}
      favoriteOffers = {favoriteOffers}
    />
  );
};

describe(`PrivateRouterSnapTest`, () => {
  it(`PrivateRouter without authorization render LoginPage`, () => {
    const store = mockStore({
      [NameSpace.USER]: {
        authorizationStatus: AuthorizationStatus.AUTH,
      },
    })
    const tree = renderer
     .create(

      <Provider store={store}>
        <Router history = {history}>
          <PrivateRoute
            render = {render}
            path = {AppRoute.FAVORITE}
            authorizationStatus = {AuthorizationStatus.AUTH}
          />
        </Router>
      </Provider>
     )
     .toJSON();

     expect(tree).toMatchSnapshot();
  })
})
