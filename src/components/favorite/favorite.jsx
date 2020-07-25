import React from "react";
import PropTypes from "prop-types";
import HeaderBlock from "../header-block/header-block.jsx";
import OfferListSaved from "../offer-list-saved/offer-list-saved.jsx";
import FavoriteEmpty from "../favorite-empty/favorite-empty.jsx";
import {getCitiesFromOffers} from "../../common.js";


const Favorite = (props) => {
  const {favoriteOffers, onOfferTitleClick, authorizationStatus, onUserBlockClick, name, changeFavoriteStatus} = props;
  const favoriteCities = getCitiesFromOffers(favoriteOffers);

  return (
    <div className={(favoriteOffers) ? `page` : `page page--favorites-empty`}>
      {<HeaderBlock
        authorizationStatus = {authorizationStatus}
        name = {name}
        onUserBlockClick = {onUserBlockClick}
      />}

      {(favoriteOffers) ?
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              {favoriteCities.map((city) => {
                return (
                  <OfferListSaved key={city.name}
                    offers = {favoriteOffers[city.name]}
                    onOfferTitleClick = {onOfferTitleClick}
                    changeFavoriteStatus = {changeFavoriteStatus}
                  />);
              })

              }
            </section>
          </div>
        </main> :
        <FavoriteEmpty />
      }
      <footer className="footer">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
};

Favorite.propTypes = {
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
  authorizationStatus: PropTypes.string.isRequired,
  onUserBlockClick: PropTypes.func.isRequired,
  name: PropTypes.string,
};

export default Favorite;
