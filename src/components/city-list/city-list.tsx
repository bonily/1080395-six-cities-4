import * as React from "react";
import {City} from "../../types";

interface Props {
  cities: City[];
  onCityTitleClick: (arg0: string) => void;
  selectedCity: string;
}

const CityList: React.FunctionComponent<Props> = (props: Props) => {
  const {cities, onCityTitleClick, selectedCity} = props;
  const cityNames = cities.map((city) => city.name);

  return (
    <ul className="locations__list tabs__list">
      {cityNames.map((city, i) => (
        <li className="locations__item" key={i + city}>
          <a className={city === selectedCity ? `locations__item-link tabs__item tabs__item--active` : `locations__item-link tabs__item`} onClick={() => onCityTitleClick(city)} href="#">
            <span>{city}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};


export default React.memo(CityList);
