import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import OfferProperty from "../offer-property/offer-property.jsx";
import {getOffersByCity, getCitiesFromOffers} from "../../common.js";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";


class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      id: -1
    };

    this._handleOfferTitleClick = this._handleOfferTitleClick.bind(this);
  }

  _renderOfferList() {
    const {selectedCity, offers, onCityTitleClick} = this.props;
    const {id} = this.state;

    const cities = getCitiesFromOffers(offers);
    const currentOffers = getOffersByCity(selectedCity, offers);
    const offerIndex = currentOffers.findIndex((offer) => offer.id === id);


    if (id > -1) {
      return (
        <OfferProperty
          offer = {currentOffers[offerIndex]}
          offers = {currentOffers.filter((offer) => offer !== currentOffers[offerIndex])}
          onOfferTitleClick = {this._handleOfferTitleClick}
        />
      );
    }

    return (
      <Main
        offersCount = {currentOffers.length}
        offers = {currentOffers}
        cities = {cities}
        onOfferTitleClick = {this._handleOfferTitleClick}
        onCityTitleClick = {onCityTitleClick}
        selectedCity = {selectedCity}
      />
    );
  }

  render() {
    const {offers, selectedCity} = this.props;
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
              /> : ``
            }
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
  _handleOfferTitleClick(offerId) {

    this.setState({
      id: offerId,
    });
  }
}

App.propTypes = {
  selectedCity: PropTypes.string.isRequired,
  onCityTitleClick: PropTypes.func.isRequired,
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
  offers: state.offers
});

const mapDispatchToProps = (dispatch) => ({
  onCityTitleClick(city) {
    dispatch(ActionCreator.changeCity(city));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
