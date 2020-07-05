import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CityList from "./city-list";

Enzyme.configure({
  adapter: new Adapter(),
});

const CITIES = [`Amsterdam`, `Paris`, `Cologne`];

describe(`CityListE2eTest`, () => {
  it(`Should title click works`, () => {
    const onTitleClick = jest.fn();

    const cityList = shallow(
        <CityList
          cities = {CITIES}
          selectedCity = {CITIES[0]}
          onCityTitleClick = {onTitleClick}
        />
    );

    const titles = cityList.find(`.locations__item-link`);

    titles.forEach((title) => {
      onTitleClick.mockClear();
      title.simulate(`click`);
      expect(onTitleClick).toHaveBeenCalledTimes(1);
    });
  });
});
