import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {FILTERS} from "../../const.js";
import {capitalize} from "../../common.js";


class FilterList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      view: `closed`
    };

    this._handleFilterTitleClick = this._handleFilterTitleClick.bind(this);
  }

  render() {
    const {selectedFilter, onFilterNameClick} = this.props;

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex="0" onClick = {() => this._handleFilterTitleClick(this.state.view)}>
          {capitalize(selectedFilter)}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className={`places__options places__options--custom places__options--${this.state.view}`}>
          {FILTERS.map((filter, i) => {
            return (
              <li className={filter.name === selectedFilter ? `places__option places__option--active` : `places__option`} tabIndex="0" key={i + filter.name} onClick = {() => onFilterNameClick(filter.name)}>{filter.description}</li>
            );
          })}
        </ul>
      </form>
    );
  }

  _handleFilterTitleClick(value) {
    if (value === `opened`) {
      this.setState({
        view: `closed`,
      });
    }
    if (value === `closed`) {
      this.setState({
        view: `opened`,
      });
    }
  }
}

FilterList.propTypes = {
  selectedFilter: PropTypes.string.isRequired,
  onFilterNameClick: PropTypes.func.isRequired
};

export default FilterList;
