import * as React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FilterList from "./filter-list";


const selectedFilter = `Popular`;

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`FilterListE2eTes`, () => {
  it(`Should filter name be pressed and change active filter`, () => {
    const onFilterNameClick = jest.fn();

    const filterList = shallow(
        <FilterList
          selectedFilter = {selectedFilter}
          onFilterNameClick = {onFilterNameClick}
          onOpenChange = {() => {}}
          isOpen = {false}
        />
    );

    const filters = filterList.find(`.places__option`);

    filters.forEach((filter) => {
      onFilterNameClick.mockClear();
      filter.simulate(`click`);
      expect(onFilterNameClick).toHaveBeenCalledTimes(1);
      filter.hasClass(`places__option--active`);
    });
  });
});
