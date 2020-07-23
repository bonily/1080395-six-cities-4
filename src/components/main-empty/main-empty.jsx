import React from "react";
import PropTypes from "prop-types";
import {ErrorTypes} from "../../const";


const MainEmpty = (props) => {
  const {selectedCity, error} = props;
  return (
    <div className="cities__places-container cities__places-container--empty container">
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          {error === ErrorTypes.NETWORK ?
            <b className="cities__status">Netwok connection failed</b> :
            <b className="cities__status">No places to stay available</b>
          }
          <p className="cities__status-description">We could not find any property availbale at the moment in {selectedCity}</p>
        </div>
      </section>
      <div className="cities__right-section"></div>
    </div>
  );
};

MainEmpty.propTypes = {
  selectedCity: PropTypes.string.isRequired,
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired
};

export default MainEmpty;
