import React from "react";
import renderer from "react-test-renderer";
import CityList from "./city-list";


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

const selectedCity = `Amsterdam`;


describe(`CityListSnapTest`, () => {
  it(`Citylist should render cities menu block`, () => {
    const tree = renderer
      .create(<CityList
        cities = {cities}
        selectedCity = {selectedCity}
        onCityTitleClick = {() => {}}
      />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
