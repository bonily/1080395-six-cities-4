import React from "react";
import PropTypes from "prop-types";

const CityList = (props) => {
  const {cities, onCityTitleClick, selectedCity} = props;

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city, i) => (
        <li className="locations__item" key={i + city}>
          <a className={city === selectedCity ? `locations__item-link tabs__item tabs__item--active` : `locations__item-link tabs__item`} onClick={() => onCityTitleClick(city)} href="#">
            <span>{city}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

CityList.propTypes = {
  cities: PropTypes.array.isRequired,
  onCityTitleClick: PropTypes.func.isRequired,
  selectedCity: PropTypes.string.isRequired
};

export default CityList;
