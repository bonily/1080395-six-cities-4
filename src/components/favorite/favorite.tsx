import * as React from "react";
import {Link, Router} from "react-router-dom";
import FavoriteEmpty from "../favorite-empty/favorite-empty";
import HeaderBlock from "../header-block/header-block";
import OfferListSaved from "../offer-list-saved/offer-list-saved";
import {getCitiesFromOffers} from "../../common.js";
import {Offer} from "../../types";
import history from "../../history.js";


interface Props {
    authorizationStatus: string;
    name: string;
    favoriteOffers: { [key: string]: Offer[] };
    onChangeFavoriteStatus: (arg0: number, arg1: boolean, arg2: () => void) => void;
    onOfferTitleClick: (arg0: number) => void;
    onLoadFavoriteOffers: () => void;
  }

const Favorite: React.FunctionComponent<Props> = (props: Props) => {
  const {favoriteOffers, authorizationStatus, name, onChangeFavoriteStatus, onOfferTitleClick, onLoadFavoriteOffers} = props;

  const favoriteCities = getCitiesFromOffers(favoriteOffers);

  return (
    <Router history={history}>
      <div className={(favoriteCities.length > 0) ? `page` : `page page--favorites-empty`}>
        {<HeaderBlock
          authorizationStatus = {authorizationStatus}
          name = {name}
          onLoadFavoriteOffers = {onLoadFavoriteOffers}
        />}
        {(favoriteCities.length > 0) ?
          <main className="page__main page__main--favorites">
            <div className="page__favorites-container container">
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                {favoriteCities.map((city) => {
                  return (
                    <OfferListSaved key={city.name}
                      offers = {favoriteOffers[city.name]}
                      onOfferTitleClick = {onOfferTitleClick}
                      onChangeFavoriteStatus = {onChangeFavoriteStatus}
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
    </Router>
  );
};

export default Favorite;
