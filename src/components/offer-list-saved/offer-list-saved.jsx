import React from "react";
import PropTypes from "prop-types";
import {getCitiesFromOffers, groupOffersByCity} from "../../common";
import OfferCard from "../offer-card/offer-card.jsx";
import {withFavoriteFlag} from "../../hoc/with-favorite-flag/with-favorite-flag";

const OfferCardWrappered = withFavoriteFlag(OfferCard);

const OfferListSaved = (props) => {

  const {offers, onOfferTitleClick, changeFavoriteStatus} = props;
  const className = `favorites`;

  if (offers) {

    const currentOffers = groupOffersByCity(offers);
    const cities = getCitiesFromOffers(currentOffers);

    return (
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
                  <OfferCardWrappered
                    className = {className}
                    offer = {offer}
                    onOfferTitleClick = {onOfferTitleClick}
                    key = {offer.id}
                    onCardHoverOff = {() => {}}
                    onCardHoverOn = {() => {}}
                    changeFavoriteStatus = {changeFavoriteStatus}
                  />
                ))}
              </div>
            </li>
          );
        })}
      </ul>

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
  changeFavoriteStatus: PropTypes.func.isRequired,
};


export default OfferListSaved;
