import * as React from "react";
import {FILTERS} from "../../const.js";
import {capitalize} from "../../common.js";


interface Props {
  selectedFilter: string;
  onFilterNameClick: (name) => void;
  isOpen: boolean;
  onOpenChange: () => void;
}

class FilterList extends React.PureComponent<Props, {}> {
  constructor(props) {
    super(props);

    this._handleDocumentClick = this._handleDocumentClick.bind(this);
  }

  render() {
    const {selectedFilter, onFilterNameClick, isOpen, onOpenChange} = this.props;

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex={0} onClick = {() => {
          onOpenChange();
          document.addEventListener(`click`, this._handleDocumentClick);
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
  }

  _handleDocumentClick(evt) {
    const {onOpenChange} = this.props;

    const filterTypeClassName = `places__option`;
    const targetClassName = evt.target.classList[0];

    if (targetClassName !== filterTypeClassName) {
      onOpenChange();

      document.removeEventListener(`click`, this._handleDocumentClick);
    }
  }
}

export default FilterList;
