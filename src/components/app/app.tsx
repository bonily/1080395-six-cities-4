import * as React from "react";
import history from "../../history.js";
import {connect} from "react-redux";
import {Router, Route, Switch} from "react-router-dom";
import Favorite from "../favorite/favorite";
import Main from "../main/main";
import LoginPage from "../login-page/login-page";
import PrivateRoute from "../private-route/private-route";
import OfferProperty from "../offer-property/offer-property";
import {ActionCreator} from "../../reducer/state/state.js";
import {ActionCreator as ActionData, Operation as OperationData} from "../../reducer/data/data.js";
import {Operation as OperationUser} from "../../reducer/user/user.js";
import {Operation as OperationReview} from "../../reducer/review/review.js";
import {getCurrentOffers, getCity, getCities, getFavotiteOffers, getNearOffers, getAllOffers} from "../../reducer/data/selector.js";
import {getSelectedFilter, getHighlightedPinId, getLoadingStatus} from "../../reducer/state/selector.js";
import {getReviews} from "../../reducer/review/selector.js";
import {getErrorStatus} from "../../reducer/error/selector.js";
import {getAuthorizationStatus, getUserName, getUserId} from "../../reducer/user/selectors.js";
import {AppRoute} from "../../const.js";
import {City, Offer, Review} from "../../types";



interface Props {
  allOffers: Offer[],
  authorizationStatus: string,
  cities: City[],
  error: string | number,
  favoriteOffers: { [key: string]: Offer[] },
  highlightedPinId: number,
  nearOffers: Offer[]
  offers: Offer[],
  reviews: Review[],
  selectedCity: string,
  selectedFilter: string,
  userName: string,
  loadAllOffersData: (number) => void;
  loadFavoriteOffers: () => void,
  changeFavoriteStatus: () => void,
  onAuthFormSubmit: ({login, password} : {login: string, password: string}) => {},
  onCardHoverOn: (arg0: number) => void,
  onCardHoverOff: () => void,
  onCityTitleClick: (arg0: string) => void,
  onFilterNameClick: (arg0: string) => void,
  onOfferTitleClick: (arg0: number) => void,
  onReviewFormSubmit: () => void,
};

class App extends React.Component<Props, {}> {

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
    const {authorizationStatus, onOfferTitleClick, userName, onAuthFormSubmit, reviews, onReviewFormSubmit, changeFavoriteStatus, favoriteOffers, onCardHoverOn, onCardHoverOff, error, highlightedPinId, nearOffers, loadFavoriteOffers, allOffers, loadAllOffersData} = this.props;


    return (
      <Router
        history={history}>
        <Switch>
          <Route exact path={AppRoute.ROOT}>
            {this._renderOfferList()}
          </Route>
          <Route exact path="/login">
            <LoginPage
              onAuthFormSubmit= {onAuthFormSubmit}
              error = {``}
            />
          </Route>
          <Route
            exact path={`${AppRoute.OFFER}/:id`}
            render={ (routeProps) => (

              <OfferProperty
                offers = {allOffers}
                authorizationStatus = {authorizationStatus}
                nearOffers = {nearOffers}
                onOfferTitleClick = {onOfferTitleClick}
                onCardHoverOn = {onCardHoverOn}
                onCardHoverOff = {onCardHoverOff}
                userName = {userName}
                reviews = {reviews}
                onReviewFormSubmit = {onReviewFormSubmit}
                error = {error}
                routeProps = {routeProps}
                highlightedPinId = {highlightedPinId}
                changeFavoriteStatus = {changeFavoriteStatus}
                loadFavoriteOffers = {loadFavoriteOffers}
                loadAllOffers = {loadAllOffersData}
              />

            )
            }
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
  isLoading: getLoadingStatus(state),
  allOffers: getAllOffers(state)
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

  loadAllOffersData(id) {
    dispatch(OperationReview.loadReviews(id));
    dispatch(OperationData.loadNearOffers(id));
    dispatch(OperationData.loadOffers());
  },

  changeFavoriteStatus(id, isFavorite, onFavoriteStatusChange) {
    const status = isFavorite ? 0 : 1;
    dispatch(OperationData.changeFavoriteStatus(id, status, onFavoriteStatusChange));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
