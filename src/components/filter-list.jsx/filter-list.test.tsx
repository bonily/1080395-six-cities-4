import * as React from "react";
import * as renderer from "react-test-renderer";
import FilterList from "./filter-list";
import {noop} from "../../common";

const selectedFilter = `Popular`;

describe(`FilterSnapTest`, () => {
  it(`FilterList should render filter list compinent`, () => {
    const tree = renderer
      .create(
          <FilterList
            selectedFilter = {selectedFilter}
            onFilterNameClick = {noop}
            onOpenChange = {noop}
            isOpen = {false}
          />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

