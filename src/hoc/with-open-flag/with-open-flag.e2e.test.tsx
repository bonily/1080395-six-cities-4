import * as React from "react";
import {configure, shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import {withOpenFlag} from "./with-open-flag";


const selectedFilter = `popular`;

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withOpenFlag(MockComponent);

describe(`withOpenFlage2etest`, () => {
  it(`Should withOpenFlag component render correctly`, () => {
    const onFilterNameClick = jest.fn();

    const wrapper = shallow(<MockComponentWrapped
      selectedFilter = {selectedFilter}
      onFilterNameClick = {onFilterNameClick}
    />);

    expect(wrapper.props().selectedFilter).toBe(`popular`);

    const filters = wrapper.find(`places__option`);

    filters.forEach((filter) => {
      onFilterNameClick.mockClear();
      filter.simulate(`click`);
      expect(onFilterNameClick).toHaveBeenCalledTimes(1);
      expect(onFilterNameClick).toEqual(filter);
    });

    wrapper.props().onOpenChange();
    expect(wrapper.props().isOpen).toBe(true);

    wrapper.props().onOpenChange();
    expect(wrapper.props().isOpen).toBe(false);
  });
});
