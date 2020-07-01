import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import OfferProperty from "../offer-property/offer-property.jsx";


class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      id: -1
    };

    this._handleOfferTitleClick = this._handleOfferTitleClick.bind(this);
  }

  _renderOfferList() {
    const {offersCount, offers} = this.props;
    const {id} = this.state;
    const offerIndex = offers.findIndex((offer) => offer.id === id);

    if (id > -1) {
      return (
        <OfferProperty
          offer = {offers[offerIndex]}
          offers = {offers.filter((offer) => offer !== offers[offerIndex])}
          onOfferTitleClick = {this._handleOfferTitleClick}
        />
      );
    }

    return (
      <Main
        offersCount = {offersCount}
        offers = {offers}
        onOfferTitleClick = {this._handleOfferTitleClick}
      />
    );
  }

  render() {
    const {offers} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderOfferList()}
          </Route>
          <Route exact path="/offer">
            <OfferProperty
              offer = {offers[0]}
              offers = {offers.slice(-3)}
              onOfferTitleClick = {() => ({})}
            />
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
  offersCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(
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
  ).isRequired,
};

export default App;
