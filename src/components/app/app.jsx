import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import {Router, Route, Switch} from "react-router-dom";
import OfferProperty from "../offer-property/offer-property.jsx";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/state/state.js";
import {ActionCreator as ActionData, Operation as OperationData} from "../../reducer/data/data.js";
import {Operation as OperationUser} from "../../reducer/user/user.js";
import LoginPage from "../login-page/login-page.jsx";
import Favorite from "../favorite/favorite.jsx";
import {getAuthorizationStatus, getUserName, getUserId} from "../../reducer/user/selectors.js";
import {getCurrentOffers, getCity, getCities, getFavotiteOffers, getNearOffers} from "../../reducer/data/selector.js";
import {getSelectedFilter, getHighlightedPinId, getLoadingStatus} from "../../reducer/state/selector.js";
import {Operation as OperationReview} from "../../reducer/review/review.js";
import {getReviews} from "../../reducer/review/selector.js";
import {getErrorStatus} from "../../reducer/error/selector.js";
import history from "../../history.js";
import PrivateRoute from "../private-route/private-route.jsx";
import {AppRoute} from "../../const.js";


class App extends React.Component {

  _renderOfferList() {

    const {selectedCity, offers, selectedFilter, onCityTitleClick, onFilterNameClick, highlightedPinId, onCardHoverOn, onCardHoverOff, onOfferTitleClick, userName, authorizationStatus, cities, error, changeFavoriteStatus, loadFavoriteOffers} = this.props;

    if (offers) {

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
          error = {error}
          changeFavoriteStatus = {changeFavoriteStatus}
          loadFavoriteOffers = {loadFavoriteOffers}
        />
      );


    }
    return null;
  }

  render() {
    const {offers, authorizationStatus, onOfferTitleClick, userName, onAuthFormSubmit, reviews, onReviewFormSubmit, changeFavoriteStatus, favoriteOffers, onCardHoverOn, onCardHoverOff, userId, error, highlightedPinId, nearOffers} = this.props;

    return (
      <Router
        history={history}>
        <Switch>
          <Route exact path={AppRoute.ROOT}>
            {this._renderOfferList()}
          </Route>
          <Route exact path="/login">
            <LoginPage
              isLoginComplete = {false}
              onAuthFormSubmit= {onAuthFormSubmit}
              error = {``}
            />
          </Route>
          <Route
            exact path={`${AppRoute.OFFER}/:id`}
            render={ (routeProps) => (

              <OfferProperty
                offers = {offers}
                onOfferTitleClick = {onOfferTitleClick}
                onCardHoverOn = {onCardHoverOn}
                onCardHoverOff = {onCardHoverOff}
                authorizationStatus = {authorizationStatus}
                userName = {userName}
                userId = {userId}
                reviews = {reviews}
                onReviewFormSubmit = {onReviewFormSubmit}
                error = {error}
                routeProps = {routeProps}
                highlightedPinId = {highlightedPinId}
                nearOffers = {nearOffers}
                changeFavoriteStatus = {changeFavoriteStatus}
              />
            )}
          >

          </Route>
          <PrivateRoute
            exact path={AppRoute.FAVORITE}
            render = {() => {
              return (
                <Favorite
                  authorizationStatus = {authorizationStatus}
                  onOfferTitleClick = {onOfferTitleClick}
                  name = {userName}
                  changeFavoriteStatus = {changeFavoriteStatus}
                  favoriteOffers = {favoriteOffers}
                />
              );
            }}
          ></PrivateRoute>
        </Switch>
      </Router>
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
        price: PropTypes.number.isRequired,
        raiting: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        isInBookmark: PropTypes.bool.isRequired,
        isPremium: PropTypes.bool.isRequired,
      }).isRequired).isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  userName: PropTypes.string,
  cities: PropTypes.array.isRequired,
  changeFavoriteStatus: PropTypes.func.isRequired,
  onAuthFormSubmit: PropTypes.func.isRequired,
  loadFavoriteOffers: PropTypes.func.isRequired,
  favoriteOffers: PropTypes.array.isRequired,
  nearOffers: PropTypes.array.isRequired

};

const mapStateToProps = (state) => ({
  selectedCity: getCity(state),
  selectedFilter: getSelectedFilter(state),
  offers: getCurrentOffers(state),
  highlightedPinId: getHighlightedPinId(state),
  authorizationStatus: getAuthorizationStatus(state),
  userName: getUserName(state),
  cities: getCities(state),
  reviews: getReviews(state),
  userId: getUserId(state),
  error: getErrorStatus(state),
  favoriteOffers: getFavotiteOffers(state),
  nearOffers: getNearOffers(state),
  isLoading: getLoadingStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  loadFavoriteOffers() {
    dispatch(OperationData.loadFavoriteOffers());
  },
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
    dispatch(OperationReview.loadReviews(id));
    dispatch(OperationData.loadNearOffers(id));
  },
  changeFavoriteStatus(id, isFavorite, onFavoriteStatusChange) {

    const status = isFavorite ? 0 : 1;
    dispatch(OperationData.changeFavoriteStatus(id, status, onFavoriteStatusChange));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
