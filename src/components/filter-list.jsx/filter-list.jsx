import React from "react";
import PropTypes from "prop-types";
import {FILTERS} from "../../const.js";


const FilterList = (props) => {

  const {selectedFilter, onFilterTitleClick} = props;
  return (
    <ul className="places__options places__options--custom places__options--opened">
      {FILTERS.map((filter, i) => {
        return (
          <li className={filter.name === selectedFilter ? `places__option places__option--active` : `places__option`} tabIndex="0" key={i + filter.name} onClick = {() => onFilterTitleClick(filter.name)}>{filter.description}</li>
        );
      })}
    </ul>
  );
};

FilterList.propTypes = {
  selectedFilter: PropTypes.string.isRequired,
  onFilterTitleClick: PropTypes.func.isRequired
};

export default FilterList;
