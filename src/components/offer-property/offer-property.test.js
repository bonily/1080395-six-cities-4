import React from "react";
import renderer from "react-test-renderer";
import OfferProperty from "./offer-property.jsx";

const OFFER = {
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
  }
};

describe(`OfferPropertySnapTest`, () => {
  it(`OfferProperty should render offer page`, () => {
    const tree = renderer
      .create(<OfferProperty
        offer = {OFFER}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});


