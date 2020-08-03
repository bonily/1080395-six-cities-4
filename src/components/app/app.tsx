import * as React from "react";
import history from "../../history";
import {connect} from "react-redux";
import {Router, Route, Switch} from "react-router-dom";
import Favorite from "../favorite/favorite";
import Main from "../main/main";
import LoginPage from "../login-page/login-page";
import PrivateRoute from "../private-route/private-route";
import OfferProperty from "../offer-property/offer-property";
import {ActionCreator} from "../../reducer/state/state";
import {ActionCreator as ActionData, Operation as OperationData} from "../../reducer/data/data";
import {Operation as OperationUser} from "../../reducer/user/user";
import {Operation as OperationReview} from "../../reducer/review/review";
import {getCurrentOffers, getCity, getCities, getFavotiteOffers, getNearOffers, getAllOffers} from "../../reducer/data/selector";
import {getSelectedFilter, getHighlightedPinId} from "../../reducer/state/selector";
import {getReviews} from "../../reducer/review/selector";
import {getErrorStatus} from "../../reducer/error/selector";
import {getAuthorizationStatus, getUserName} from "../../reducer/user/selectors";
import {AppRoute} from "../../const";
import {City, Offer, Review} from "../../types";
import {AppStateType} from "../../reducer/reducer";


interface MapStatePropsType {
  allOffers: Offer[];
  authorizationStatus: string;
  cities: City[];
  error: string | number;
  favoriteOffers: { [key: string]: Offer[] };
  highlightedPinId: number;
  nearOffers: Offer[];
  offers: Offer[];
  reviews: Review[];
  selectedCity: string;
  selectedFilter: string;
  userName: string;
}

interface MapDispatchToPropsType {
  onLoadAllOffersData: (number) => void;
  onLoadFavoriteOffers: () => void;
  onChangeFavoriteStatus: (arg0: number, arg1: boolean, arg2: () => void) => void;
  onAuthFormSubmit: (authData: {login: string; password: string}) => void;
  onCardHoverOn: (arg0: number) => void;
  onCardHoverOff: () => void;
  onCityTitleClick: (arg0: string) => void;
  onFilterNameClick: (arg0: string) => void;
  onOfferTitleClick: (arg0: number) => void;
  onReviewFormSubmit: ({comment, rating}: {comment: string; rating: number}, arg1: number, arg2: () => void, arg3: () => void) => void;
}


type Props = MapDispatchToPropsType & MapStatePropsType;


class App extends React.Component<Props, {}> {

  _renderOfferList() {

    const {selectedCity, offers, selectedFilter, onCityTitleClick, onFilterNameClick, highlightedPinId, onCardHoverOn, onCardHoverOff, onOfferTitleClick, userName, authorizationStatus, cities, error, onChangeFavoriteStatus, onLoadFavoriteOffers} = this.props;

    if (offers) {

      return (
        <Main
          offers = {offers}
          cities = {cities}
          selectedCity = {selectedCity}
          selectedFilter = {selectedFilter}
          highlightedPinId = {highlightedPinId}
          authorizationStatus = {authorizationStatus}
          name = {userName}
          error = {error}
          onChangeFavoriteStatus = {onChangeFavoriteStatus}
          onLoadFavoriteOffers = {onLoadFavoriteOffers}
          onOfferTitleClick = {onOfferTitleClick}
          onCityTitleClick = {onCityTitleClick}
          onFilterNameClick = {onFilterNameClick}
          onCardHoverOn = {onCardHoverOn}
          onCardHoverOff = {onCardHoverOff}
        />
      );


    }
    return null;
  }

  render() {
    const {authorizationStatus, userName, reviews, favoriteOffers, error, nearOffers, allOffers, onChangeFavoriteStatus, onLoadAllOffersData, onLoadFavoriteOffers, onAuthFormSubmit, onCardHoverOn, onReviewFormSubmit, onCardHoverOff, onOfferTitleClick} = this.props;


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
                userName = {userName}
                reviews = {reviews}
                error = {error}
                routeProps = {routeProps}
                onChangeFavoriteStatus = {onChangeFavoriteStatus}
                onLoadFavoriteOffers = {onLoadFavoriteOffers}
                loadAllOffers = {onLoadAllOffersData}
                onOfferTitleClick = {onOfferTitleClick}
                onCardHoverOn = {onCardHoverOn}
                onCardHoverOff = {onCardHoverOff}
                onReviewFormSubmit = {onReviewFormSubmit}
              />
            )}>
          </Route>
          <PrivateRoute
            exact path={AppRoute.FAVORITE}
            render = {() => {
              return (
                <Favorite
                  authorizationStatus = {authorizationStatus}
                  favoriteOffers = {favoriteOffers}
                  name = {userName}
                  onChangeFavoriteStatus = {onChangeFavoriteStatus}
                  onOfferTitleClick = {onOfferTitleClick}
                />
              );
            }}
          ></PrivateRoute>
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  selectedCity: getCity(state),
  selectedFilter: getSelectedFilter(state),
  offers: getCurrentOffers(state),
  highlightedPinId: getHighlightedPinId(state),
  authorizationStatus: getAuthorizationStatus(state),
  userName: getUserName(state),
  cities: getCities(state),
  reviews: getReviews(state),
  error: getErrorStatus(state),
  favoriteOffers: getFavotiteOffers(state),
  nearOffers: getNearOffers(state),
  allOffers: getAllOffers(state)
});


const mapDispatchToProps = (dispatch): MapDispatchToPropsType => ({
  onLoadFavoriteOffers() {
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
  onLoadAllOffersData(id) {
    dispatch(OperationReview.loadReviews(id));
    dispatch(OperationData.loadNearOffers(id));
    dispatch(OperationData.loadOffers());
  },
  onChangeFavoriteStatus(id, isFavorite, onFavoriteStatusChange) {
    const status = isFavorite ? 0 : 1;
    dispatch(OperationData.changeFavoriteStatus(id, status, onFavoriteStatusChange));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
