import * as React from "react";
import {FILTERS} from "../../const.js";
import {capitalize} from "../../common.js";


interface Props {
  selectedFilter: string;
  isOpen: boolean;
  onOpenChange: () => void;
  onFilterNameClick: (name) => void;
}

const FilterList: React.FunctionComponent<Props> = (props: Props) => {
  const {selectedFilter, isOpen, onOpenChange, onFilterNameClick} = props;

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick = {() => {
        onOpenChange();
      }}>
        {capitalize(selectedFilter)}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom places__options--${isOpen ? `opened` : `closed`}`}>
        {FILTERS.map((filter, i) => {
          return (
            <li className={filter.name === selectedFilter ? `places__option places__option--active` : `places__option`} tabIndex={0} key={i + filter.name} onClick = {() => onFilterNameClick(filter.name)}>{filter.description}</li>
          );
        })}
      </ul>
    </form>
  );
};

export default FilterList;
