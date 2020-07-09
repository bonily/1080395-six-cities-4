import React from "react";
import PropTypes from "prop-types";
import Map from "../map/map.jsx";
import {OfferListMain} from "../offer-list-main/offer-list-main.jsx";
import CityList from "../city-list/city-list.jsx";
import MainEmpty from "../main-empty/main-empty.jsx";
import FilterList from "../filter-list.jsx/filter-list.jsx";
import {getOffersByCity} from "../../common.js";


const Main = (props) => {
  const {offers, onOfferTitleClick, onCityTitleClick, selectedCity, onFilterNameClick, selectedFilter, highlightedPinId, onCardHoverOn, onCardHoverOff} = props;

  const currentOffers = getOffersByCity(selectedCity, offers);
  console.log(currentOffers);
  const offersCount = currentOffers.length;
  console.log(currentOffers.length);


  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className={offers.length === 0 ? `page__main page__main--index page__main--index-empty` : `page__main page__main--index`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CityList
              offers = {offers}
              onCityTitleClick = {onCityTitleClick}
              selectedCity = {selectedCity}
            />
          </section>
        </div>
        <div className="cities">
          {
            offersCount === 0 ? <MainEmpty selectedCity = {selectedCity}/> :
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{offersCount} place{offersCount > 1 ? `s` : ``} to stay in {selectedCity}</b>
                  <FilterList
                    selectedFilter = {selectedFilter}
                    onFilterNameClick = {onFilterNameClick}
                  />

                  <OfferListMain
                    offers = {currentOffers}
                    onOfferTitleClick = {onOfferTitleClick}
                    onCardHoverOn = {onCardHoverOn}
                    onCardHoverOff = {onCardHoverOff}
                    selectedFilter = {selectedFilter}
                  />
                </section>
                <div className="cities__right-section">
                  <section className="cities__map map">
                    <div id="map">
                      <Map
                        offers={currentOffers}
                        highlightedPinId = {highlightedPinId}
                      />
                    </div>
                  </section>
                </div>
              </div>
          }
        </div>
      </main>
    </div>
  );
};


Main.propTypes = {
  highlightedPinId: PropTypes.number.isRequired,
  onCardHoverOn: PropTypes.func.isRequired,
  onCardHoverOff: PropTypes.func.isRequired,
  onCityTitleClick: PropTypes.func.isRequired,
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
  selectedCity: PropTypes.string.isRequired,
  onFilterNameClick: PropTypes.func.isRequired,
  selectedFilter: PropTypes.string.isRequired
};

export default Main;
