import * as React from "react";
import {configure, shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import CityList from "./city-list";
import {City} from "../../types";

configure({
  adapter: new Adapter(),
});


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


const selectedCity = `Amsterdam`;

describe(`CityListE2eTest`, () => {
  it(`Should title click works`, () => {
    const onTitleClick = jest.fn();

    const cityList = shallow(
        <CityList
          cities = {cities}
          selectedCity = {selectedCity}
          onCityTitleClick = {onTitleClick}
        />
    );

    const titles = cityList.find(`.locations__item-link`);

    titles.forEach((title) => {
      onTitleClick.mockClear();
      title.simulate(`click`);
      expect(onTitleClick).toHaveBeenCalledTimes(1);
      title.hasClass(`tabs__item--active`);
    });
  });
});
