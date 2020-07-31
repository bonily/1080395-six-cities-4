import * as React from "react";
import {configure, shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import {withFavoriteFlag} from "./with-favorite-flag";
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
  isInBookmark: true,
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

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withFavoriteFlag(MockComponent);

describe(`withFavoriteFlag2etest`, () => {
  it(`Should withFavoriteFlag component render correctly`, () => {
    const onFavoriteStatusChange = jest.fn();

    const wrapper = shallow(<MockComponentWrapped
      onFavoriteStatusChange = {onFavoriteStatusChange}
      offer = {offer}
    />);

    wrapper.props().onFavoriteStatusChange();
    expect(wrapper.props().isInBookmark).toBeFalsy();
  });
});
