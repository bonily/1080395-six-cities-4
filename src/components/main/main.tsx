import * as React from "react";
import CityList from "../city-list/city-list";
import FilterList from "../filter-list.jsx/filter-list";
import HeaderBlock from "../header-block/header-block";
import MainEmpty from "../main-empty/main-empty";
import Map from "../map/map";
import OfferListMain from "../offer-list-main/offer-list-main";
import {withOpenFlag} from "../../hoc/with-open-flag/with-open-flag";
import {Offer, City} from "../../types";

interface Props {
  authorizationStatus: string,
  highlightedPinId: number,
  cities: City[],
  name: string,
  error: string | number
  offers: Offer[],
  selectedCity: string,
  selectedFilter: string,
  changeFavoriteStatus: () => void,
  loadFavoriteOffers: (arg0: number) => void,
  onCardHoverOn: (arg0: number) => void,
  onCardHoverOff: () => void,
  onCityTitleClick: (arg0: string) => void,
  onOfferTitleClick: (arg0: number) => void,
  onFilterNameClick: (arg0: string) => void,
};


const FilterListWrapped = withOpenFlag(FilterList);

const Main = (props) => {
  const {offers, onOfferTitleClick, onCityTitleClick, selectedCity, onFilterNameClick, selectedFilter, highlightedPinId, onCardHoverOn, onCardHoverOff, authorizationStatus, name, cities, error, changeFavoriteStatus, loadFavoriteOffers} = props;

  const currentOffers = offers;
  const offersCount = currentOffers.length;

  return (
    <div className="page page--gray page--main">
      {<HeaderBlock
        authorizationStatus = {authorizationStatus}
        name = {name}
        loadFavoriteOffers = {loadFavoriteOffers}
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
                    changeFavoriteStatus = {changeFavoriteStatus}
                    authorizationStatus = {authorizationStatus}

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


export default Main;
