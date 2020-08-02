import * as React from "react";
import {configure, shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import FilterList from "./filter-list";
import {noop} from "../../common";


const selectedFilter = `Popular`;

configure({
  adapter: new Adapter(),
});

describe(`FilterListE2eTes`, () => {
  it(`Should filter name be pressed and change active filter`, () => {
    const onFilterNameClick = jest.fn();

    const filterList = shallow(
        <FilterList
          selectedFilter = {selectedFilter}
          onFilterNameClick = {onFilterNameClick}
          onOpenChange = {noop}
          isOpen = {false}
        />
    );

    const filters = filterList.find(`.places__option`);

    filters.forEach((filter) => {
      onFilterNameClick.mockClear();
      filter.simulate(`click`);
      expect(onFilterNameClick).toHaveBeenCalledTimes(1);
    });
  });
  it(`Should filter list open click work`, () => {
    const onOpenChange = jest.fn();
    document.addEventListener = jest.fn();

    const filterList = shallow(
        <FilterList
          selectedFilter = {selectedFilter}
          onFilterNameClick = {noop}
          onOpenChange = {onOpenChange}
          isOpen = {true}
        />
    );

    const filter = filterList.find(`.places__sorting-type`);

    filter.simulate(`click`);
    expect(onOpenChange).toHaveBeenCalledTimes(1);
    expect(document.addEventListener).toHaveBeenCalledTimes(1);
  });
});
