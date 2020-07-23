import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import OfferProperty from "../offer-property/offer-property.jsx";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/state/state.js";
import {ActionCreator as ActionData} from "../../reducer/data/data.js";
import {Operation as OperationUser} from "../../reducer/user/user.js";
import LoginPage from "../login-page/login-page.jsx";
import UserPage from "../user-page/user-page.jsx";
import {getAuthorizationStatus, getUserName, getUserId} from "../../reducer/user/selectors.js";
import {getCurrentOffers, getCity, getCities} from "../../reducer/data/selector.js";
import {getSelectedFilter, getHighlightedPinId, getCurrentOfferId, getCurrentPage} from "../../reducer/state/selector.js";
import {Operation as OperationReview} from "../../reducer/review/review.js";
import {getReviews} from "../../reducer/review/selector.js";
import {getErrorStatus} from "../../reducer/error/selector.js";


class App extends React.Component {

  _renderOfferList() {

    const {selectedCity, offers, selectedFilter, onCityTitleClick, onFilterNameClick, highlightedPinId, onCardHoverOn, onCardHoverOff, currentOfferId, onOfferTitleClick, userName, onUserBlockClick, currentPage, authorizationStatus, cities, onAuthFormSubmit, reviews, userId, onReviewFormSubmit, error} = this.props;

    if (offers) {
      const offerIndex = offers.findIndex((offer) => offer.id === currentOfferId);


      if (currentPage === `offer`) {
        return (
          <OfferProperty
            offer = {offers[offerIndex]}
            offers = {offers.filter((offer) => offer !== offers[offerIndex])}
            onOfferTitleClick = {onOfferTitleClick}
            onCardHoverOn = {onCardHoverOn}
            onCardHoverOff = {onCardHoverOff}
            authorizationStatus = {authorizationStatus}
            userName = {userName}
            userId = {userId}
            reviews = {reviews}
            onReviewFormSubmit = {onReviewFormSubmit}
            onUserBlockClick={onUserBlockClick}
            error = {error}
          />
        );
      }

      if (currentPage === `login`) {
        return (
          <LoginPage
            onAuthFormSubmit= {onAuthFormSubmit}
            error = {error}
          />
        );
      }
      if (currentPage === `user`) {
        return (
          <UserPage
            offers = {offers}
            authorizationStatus = {authorizationStatus}
            onOfferTitleClick = {onOfferTitleClick}
            name = {userName}
            onUserBlockClick = {onUserBlockClick}
          />
        );
      }

      if (currentPage === `main`) {
        return (
          <Main
            offers = {offers}
            onOfferTitleClick = {onOfferTitleClick}
            onCityTitleClick = {onCityTitleClick}
            onFilterNameClick = {onFilterNameClick}
            cities = {cities}
            selectedCity = {selectedCity}
            selectedFilter = {selectedFilter}
            highlightedPinId = {highlightedPinId}
            onCardHoverOn = {onCardHoverOn}
            onCardHoverOff = {onCardHoverOff}
            authorizationStatus = {authorizationStatus}
            name = {userName}
            onUserBlockClick={onUserBlockClick}
            error = {error}
          />
        );

      }

    }
    return null;
  }

  render() {
    const {offers, authorizationStatus, onOfferTitleClick, userName, onAuthFormSubmit, onUserBlockClick, reviews, onReviewFormSubmit} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderOfferList()}
          </Route>
          <Route exact path="/offer">
            {offers ?
              <OfferProperty
                offer = {offers[2]}
                offers = {offers.filter((offer) => offer !== offers[2])}
                onOfferTitleClick = {onOfferTitleClick}
                onCardHoverOn = {() => {}}
                onCardHoverOff = {() => {}}
                authorizationStatus = {`NO_AUTH`}
                onUserBlockClick = {onUserBlockClick}
                reviews = {reviews}
                onReviewFormSubmit = {onReviewFormSubmit}
              /> : ``}
          </Route>
          <Route exact path="/login">
            <LoginPage
              isLoginComplete = {false}
              onAuthFormSubmit= {onAuthFormSubmit}
              error = {``}
            />
          </Route>
          <Route exact path="/user-page">
            <UserPage
              offers = {offers}
              authorizationStatus = {authorizationStatus}
              onOfferTitleClick = {onOfferTitleClick}
              name = {userName}
              onUserBlockClick = {() => {}}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  reviews: PropTypes.array.isRequired,
  userId: PropTypes.number.isRequired,
  onReviewFormSubmit: PropTypes.func.isRequired,
  selectedCity: PropTypes.string.isRequired,
  selectedFilter: PropTypes.string.isRequired,
  highlightedPinId: PropTypes.number.isRequired,
  onCardHoverOn: PropTypes.func.isRequired,
  onCardHoverOff: PropTypes.func.isRequired,
  onCityTitleClick: PropTypes.func.isRequired,
  onOfferTitleClick: PropTypes.func.isRequired,
  currentOfferId: PropTypes.number.isRequired,
  onFilterNameClick: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
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
  authorizationStatus: PropTypes.string.isRequired,
  userName: PropTypes.string,
  onUserBlockClick: PropTypes.func.isRequired,
  currentPage: PropTypes.string,
  cities: PropTypes.array.isRequired,
  onAuthFormSubmit: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  selectedCity: getCity(state),
  selectedFilter: getSelectedFilter(state),
  offers: getCurrentOffers(state),
  highlightedPinId: getHighlightedPinId(state),
  currentOfferId: getCurrentOfferId(state),
  authorizationStatus: getAuthorizationStatus(state),
  userName: getUserName(state),
  currentPage: getCurrentPage(state),
  cities: getCities(state),
  reviews: getReviews(state),
  userId: getUserId(state),
  error: getErrorStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  onReviewFormSubmit(comment, id, onResetForm, onBlockForm) {
    dispatch(OperationReview.newReview(comment, id, onResetForm, onBlockForm));
  },
  onAuthFormSubmit(authData) {
    dispatch(OperationUser.login(authData));
  },
  onCityTitleClick(city) {
    dispatch(ActionData.changeCity(city));
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
    dispatch(ActionCreator.changePage(`offer`));
    dispatch(ActionCreator.changeOffer(id));
    dispatch(OperationReview.loadReviews(id));
  },
  // пока костыли, после добавления middlevare будет завязано на внутренний стейт, пока передаем извне
  onUserBlockClick(isLoginComplete) {
    if (isLoginComplete) {
      dispatch(ActionCreator.changePage(`user`));
    } else {
      dispatch(ActionCreator.changePage(`login`));
    }
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
