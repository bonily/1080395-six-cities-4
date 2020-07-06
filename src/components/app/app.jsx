import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import OfferProperty from "../offer-property/offer-property.jsx";
import {getOffersByCity, getCitiesFromOffers, getFilteredOffers} from "../../common.js";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";


class App extends React.Component {

  _renderOfferList() {
    const {selectedCity, offers, selectedFilter, onCityTitleClick, onFilterNameClick, highlightedPinId, onCardHoverOn, onCardHoverOff, currentOfferId, onOfferTitleClick} = this.props;

    const cities = getCitiesFromOffers(offers);
    const currentOffers = getFilteredOffers(getOffersByCity(selectedCity, offers), selectedFilter);
    const offerIndex = currentOffers.findIndex((offer) => offer.id === currentOfferId);


    if (currentOfferId > -1) {
      return (
        <OfferProperty
          offer = {currentOffers[offerIndex]}
          offers = {currentOffers.filter((offer) => offer !== currentOffers[offerIndex])}
          onOfferTitleClick = {onOfferTitleClick}
          onCardHoverOn = {onCardHoverOn}
          onCardHoverOff = {onCardHoverOff}
        />
      );
    }

    return (
      <Main
        offersCount = {currentOffers.length}
        offers = {currentOffers}
        cities = {cities}
        onOfferTitleClick = {onOfferTitleClick}
        onCityTitleClick = {onCityTitleClick}
        onFilterNameClick = {onFilterNameClick}
        selectedCity = {selectedCity}
        selectedFilter = {selectedFilter}
        highlightedPinId = {highlightedPinId}
        onCardHoverOn = {onCardHoverOn}
        onCardHoverOff = {onCardHoverOff}
      />
    );
  }

  render() {
    const {offers, selectedCity, onCardHoverOn, onCardHoverOff} = this.props;
    const currentOffers = getOffersByCity(selectedCity, offers);

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderOfferList()}
          </Route>
          <Route exact path="/offer">
            {currentOffers.length > 0 ?
              <OfferProperty
                offer = {currentOffers[0]}
                offers = {currentOffers}
                onOfferTitleClick = {() => ({})}
                onCardHoverOn = {onCardHoverOn}
                onCardHoverOff = {onCardHoverOff}
              /> : ``
            }
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  selectedCity: PropTypes.string.isRequired,
  selectedFilter: PropTypes.string.isRequired,
  highlightedPinId: PropTypes.number.isRequired,
  onCardHoverOn: PropTypes.func.isRequired,
  onCardHoverOff: PropTypes.func.isRequired,
  onCityTitleClick: PropTypes.func.isRequired,
  onOfferTitleClick: PropTypes.func.isRequired,
  currentOfferId: PropTypes.number.isRequired,
  onFilterNameClick: PropTypes.func.isRequired,
  offers: PropTypes.objectOf(PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.array.isRequired,
        price: PropTypes.number.isRequired,
        raiting: PropTypes.number.isRequired,
        bedrooms: PropTypes.number.isRequired,
        quests: PropTypes.object.isRequired,
        items: PropTypes.array.isRequired,
        type: PropTypes.string.isRequired,
        isInBookmark: PropTypes.bool.isRequired,
        isPremium: PropTypes.bool.isRequired,
        photos: PropTypes.array.isRequired,
        host:
          PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isSuper: PropTypes.bool.isRequired
          }).isRequired,
      })
  )
  ).isRequired,
};

const mapStateToProps = (state) => ({
  selectedCity: state.selectedCity,
  selectedFilter: state.selectedFilter,
  offers: state.offers,
  highlightedPinId: state.highlightedPinId,
  currentOfferId: state.currentOfferId
});

const mapDispatchToProps = (dispatch) => ({
  onCityTitleClick(city) {
    dispatch(ActionCreator.changeCity(city));
  },
  onFilterNameClick(filter) {
    dispatch(ActionCreator.changeFilter(filter));
  },
  onCardHoverOn(id) {
    dispatch(ActionCreator.highlightPin(id));
  },
  onCardHoverOff() {
    dispatch(ActionCreator.highlightPin(-1));
  },
  onOfferTitleClick(id) {
    dispatch(ActionCreator.changeOffer(id));
  }

});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
