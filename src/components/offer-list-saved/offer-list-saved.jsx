import React from "react";
import PropTypes from "prop-types";
import {getCitiesFromOffers, groupOffersByCity} from "../../common";
import OfferCard from "../offer-card/offer-card.jsx";

const OfferListSaved = (props) => {

  const {offers, onOfferTitleClick} = props;
  const className = `favorites`;

  if (offers) {

    const currentOffers = groupOffersByCity(offers);
    const cities = getCitiesFromOffers(currentOffers);

    return (
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <ul className="favorites__list">
          {cities.map((city) => {
            return (
              <li className="favorites__locations-items" key={city.name}>
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>{city.name}</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {currentOffers[city.name].map((offer) => (
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
  }
  return null;
};

OfferListSaved.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        raiting: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        isInBookmark: PropTypes.bool.isRequired,
        isPremium: PropTypes.bool.isRequired,
      }).isRequired),
  onOfferTitleClick: PropTypes.func.isRequired,
};


export default OfferListSaved;
