import React from "react";
import PropTypes from "prop-types";
import {getCitiesFromOffers} from "../../common";

const CityList = (props) => {
  const {offers, onCityTitleClick, selectedCity} = props;
  const cities = getCitiesFromOffers(offers);

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
  offers: PropTypes.object.isRequired,
  onCityTitleClick: PropTypes.func.isRequired,
  selectedCity: PropTypes.string.isRequired
};

export default React.memo(CityList);
