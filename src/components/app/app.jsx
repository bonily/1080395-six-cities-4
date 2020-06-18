import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import OfferProperty from "../offer-property/offer-property.jsx";


const offerTitleHandler = (evt) => {
  evt.preventDefault();
};

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderOfferList() {
    const {offersCount, offers} = this.props;

    return (
      <Main
        offersCount = {offersCount}
        offers = {offers}
        onOfferTitleClick = {offerTitleHandler}
      />
    );
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderOfferList()}
          </Route>
          <Route exact path="/offer">
            <OfferProperty />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }


}

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        raiting: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        isInBookmark: PropTypes.bool.isRequired,
        isPremium: PropTypes.bool.isRequired,
      })
  ).isRequired,
};

export default App;
