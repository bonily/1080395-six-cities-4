import * as React from "react";
import * as renderer from "react-test-renderer";
import CityList from "./city-list";
import {City} from "../../types";
import {noop} from "../../common";


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


describe(`CityListSnapTest`, () => {
  it(`Citylist should render cities menu block`, () => {
    const tree = renderer
      .create(<CityList
        cities = {cities}
        selectedCity = {selectedCity}
        onCityTitleClick = {noop}
      />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
