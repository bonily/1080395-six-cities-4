import React from "react";
import PropTypes from "prop-types";
import Map from "../map/map.jsx";
import {OfferListMain} from "../offer-list-main/offer-list-main.jsx";
import CityList from "../city-list/city-list.jsx";
import MainEmpty from "../main-empty/main-empty.jsx";
import FilterList from "../filter-list.jsx/filter-list.jsx";
import HeaderBlock from "../header-block/header-block.jsx";
import {withOpenFlag} from "../../hoc/with-open-flag/with-open-flag.jsx";


const FilterListWrapped = withOpenFlag(FilterList);

const Main = (props) => {
  const {offers, onOfferTitleClick, onCityTitleClick, selectedCity, onFilterNameClick, selectedFilter, highlightedPinId, onCardHoverOn, onCardHoverOff, authorizationStatus, name, onUserBlockClick, cities, error} = props;

  const currentOffers = offers;
  const offersCount = currentOffers.length;

  return (
    <div className="page page--gray page--main">
      {<HeaderBlock
        authorizationStatus = {authorizationStatus}
        name = {name}
        onUserBlockClick = {onUserBlockClick}
      />}
      <main className={offers.length === 0 ? `page__main page__main--index page__main--index-empty` : `page__main page__main--index`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CityList
              onCityTitleClick = {onCityTitleClick}
              selectedCity = {selectedCity}
              cities = {cities}
            />
          </section>
        </div>
        <div className="cities">
          {
            offersCount === 0 ? <MainEmpty
              selectedCity = {selectedCity}
              error = {error}
            /> :
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{offersCount} place{offersCount > 1 ? `s` : ``} to stay in {selectedCity}</b>
                  <FilterListWrapped
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
                        city = {cities.filter((city) => city.name === selectedCity)[0]}
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
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        raiting: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        isInBookmark: PropTypes.bool.isRequired,
        isPremium: PropTypes.bool.isRequired,
      }).isRequired).isRequired,
  onOfferTitleClick: PropTypes.func.isRequired,
  selectedCity: PropTypes.string.isRequired,
  onFilterNameClick: PropTypes.func.isRequired,
  selectedFilter: PropTypes.string.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  name: PropTypes.string,
  onUserBlockClick: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired

};

export default Main;
