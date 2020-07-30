import * as React from "react";
import {Link} from "react-router-dom";
import FavoriteEmpty from "../favorite-empty/favorite-empty";
import HeaderBlock from "../header-block/header-block";
import OfferListSaved from "../offer-list-saved/offer-list-saved";
import {getCitiesFromOffers} from "../../common.js";
import {Offer} from "../../types";



interface Props {
    onOfferTitleClick: () => void,
    authorizationStatus: string,
    name: string,
    favoriteOffers: { [key: string]: Offer[] }
    changeFavoriteStatus: () => void,
  };

const Favorite = (props) => {
  const {favoriteOffers, onOfferTitleClick, authorizationStatus, name, changeFavoriteStatus} = props;
  const favoriteCities = getCitiesFromOffers(favoriteOffers);

  return (
    <div className={(favoriteOffers) ? `page` : `page page--favorites-empty`}>
      {<HeaderBlock
        authorizationStatus = {authorizationStatus}
        name = {name}
        loadFavoriteOffers = {() => {}}
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

        <Link to="/" className="footer__logo-link">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
};

export default Favorite;
