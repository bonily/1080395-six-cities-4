import React from "react";
import renderer from "react-test-renderer";
import CityList from "./city-list";

const CITIES = [`Amsterdam`, `Paris`, `Cologne`];

describe(`CityListSnapTest`, () => {
  it(`Citylist should render cities menu block`, () => {
    const tree = renderer
      .create(<CityList
        cities = {CITIES}
        selectedCity = {CITIES[0]}
        onCityTitleClick = {() => {}}
      />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
