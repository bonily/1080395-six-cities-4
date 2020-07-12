import React from "react";
import PropTypes from "prop-types";
import {getCitiesFromOffers} from "../../common";
import OfferCard from "../offer-card/offer-card.jsx";

const OfferListSaved = (props) => {

  const {offers, onOfferTitleClick} = props;
  const className = `favorites`;
  const cities = getCitiesFromOffers(offers);

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {cities.map((city) => {
          return (
            <li className="favorites__locations-items" key={city}>
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#">
                    <span>{city}</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places">
                {offers[city].map((offer) => (
                  <OfferCard
                    className = {className}
                    offer = {offer}
                    onOfferTitleClick = {onOfferTitleClick}
                    key = {offer.id}
                    onCardHoverOn = {() => {}}
                    onCardHoverOff = {() => {}}
                  />
                ))}
              </div>
            </li>
          );
        })}
      </ul>
    </section>

  );
};

OfferListSaved.propTypes = {
  offers: PropTypes.objectOf(PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        raiting: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        isInBookmark: PropTypes.bool.isRequired,
        isPremium: PropTypes.bool.isRequired,
      }).isRequired)
  ).isRequired,
  onOfferTitleClick: PropTypes.func.isRequired,
};


export default OfferListSaved;
