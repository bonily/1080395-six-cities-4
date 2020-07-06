import React from "react";
import renderer from "react-test-renderer";
import FilterList from "./filter-list";

const selectedFilter = `Popular`;

describe(`FilterSnapTest`, () => {
  it(`FilterList should render filter list compinent`, () => {
    const tree = renderer
      .create(
          <FilterList
            selectedFilter = {selectedFilter}
            onFilterNameClick = {() => {}}
          />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

