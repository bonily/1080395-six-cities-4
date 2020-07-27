import React from "react";
import renderer from "react-test-renderer";
import Favorite from "./favorite.jsx";

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`
};

const offers = {
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
        avatarUrl: `img/avatar-max.jpg`,
      },
      coords: [52.3909553943508, 4.85309666406198],
      city: {
        name: `Paris`
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
        avatarUrl: `img/avatar-max.jpg`,

      },
      coords: [52.369553943508, 4.85309666406198],
      city: {
        name: `Amsterdam`
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
        avatar: ``,
        name: `Olga`,
        isSuper: true,
        avatarUrl: `img/avatar-olga.jpg`,
      },
      coords: [52.3909553943508, 4.929309666406198],
      city: {
        name: `Cologne`
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
        avatar: ``,
        name: `Roman`,
        isSuper: false,
        avatarUrl: `img/avatar-roma.jpg`,
      },
      coords: [52.3809553943508, 4.939309666406198],
      city: {
        name: `Barcelona`
      }
    }]
};

const NAME = `Petra`;


describe(`FavoriteSnapTest`, () => {
  it(`Favorite should render page with favorite offers`, () => {
    const tree = renderer
      .create(
          <Favorite
            favoriteOffers = {offers}
            onOfferTitleClick = {() => {}}
            authorizationStatus = {AuthorizationStatus.AUTH}
            onUserBlockClick = {() => {}}
            name = {NAME}
            сity = {`Paris`}
            changeFavoriteStatus = {() => {}}
            loadFavoriteOffers = {() => {}}
          />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
