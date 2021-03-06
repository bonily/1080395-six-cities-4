import * as React from "react";
import {MAX_STAR_COUNT, ErrorTypes} from "../../const";
import {capitalize} from "../../common.js";
import ReviewsList from "../reviews-list/reviews-list";
import {OfferListNear} from "../offer-list-near/offer-list-near";
import MapProperty from "../map-property/map-property";
import HeaderBlock from "../header-block/header-block";
import NewReview from "../new-review/new-review";
import withFormReview from "../../hoc/with-form-review/with-form-review";
import ErrorBlock from "../error-block/error-block";
import {Offer, Review} from "../../types";
import {noop} from "../../common";


const OfferTypeMap = {
  apartment: `apartment`,
  room: `private room`,
  house: `house`,
  hotel: `hotel`
};

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`
};

interface Props {
  error: string | number;
  offers: Offer[];

  authorizationStatus: string;
  userName: string;
  nearOffers: Offer[];
  routeProps: {match: {
                params: {
                  id: number;
                };
              };
                history: {
                  action: string;
                };
              };
  reviews: Review[];
  onReviewFormSubmit: ({comment, rating}: {comment: string; rating: number}, arg1: number, arg2: () => void, arg3: () => void) => void;
  onChangeFavoriteStatus: (arg0: number, arg1: boolean, arg2: () => void) => void;

  onLoadAllOfferData: (number) => void;
  onOfferTitleClick: (arg0: number) => void;
  onCardHoverOn: (arg0: number) => void;
  onCardHoverOff: () => void;
  onLoadFavoriteOffers: () => void;
}

const NewReviewWrapper = withFormReview(NewReview);


class OfferProperty extends React.PureComponent<Props, {}> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {routeProps, onLoadAllOfferData} = this.props;

    const id = routeProps.match.params.id;
    onLoadAllOfferData(id);
  }

  render() {

    const {offers, authorizationStatus, userName, reviews, error, routeProps, nearOffers, onChangeFavoriteStatus, onOfferTitleClick, onCardHoverOn, onCardHoverOff, onLoadFavoriteOffers, onReviewFormSubmit} = this.props;

    const id = routeProps.match.params.id;

    if (offers.length) {

      const offer = offers.find((currentOffer) => currentOffer.id === Number(id));
      if (offer === void 0) {
        return (
          <div className="page">
            <HeaderBlock
              authorizationStatus = {authorizationStatus}
              name = {userName}
              onLoadFavoriteOffers = {onLoadFavoriteOffers}
            />
            <main className="page__main page__main--property">
              <section className="property">
                <h1 className="property__name">Ошибка 404. Страницы не существует</h1>
              </section>
            </main>
          </div>
        );
      } else {
        const {title, description, price, raiting, bedrooms, quests, items, type, isInBookmark, isPremium, host} = offer;
        const {avatar, name, isSuper} = host;
        const raitingStarPercent = (Math.round(raiting) / MAX_STAR_COUNT * 100) + `%`;
        const photos = offer.photos.slice(0, 6);

        return (
          <div className="page">
            <HeaderBlock
              authorizationStatus = {authorizationStatus}
              name = {userName}
              onLoadFavoriteOffers = {onLoadFavoriteOffers}
            />
            <main className="page__main page__main--property">
              <section className="property">
                <div className="property__gallery-container container">
                  <div className="property__gallery">
                    {photos.map((photo, i) => {
                      return (
                        <div className="property__image-wrapper" key={i + 1}>
                          <img className="property__image" src={photo} alt="Photo studio" />
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="property__container container">
                  <div className="property__wrapper">
                    {isPremium ? <div className="property__mark"><span>Premium</span></div> : ``}

                    <div className="property__name-wrapper">
                      <h1 className="property__name">
                        {title}
                      </h1>
                      <button className= {isInBookmark ? `property__bookmark-button--active property__bookmark-button button` : `property__bookmark-button button`} type="button" onClick={() => onChangeFavoriteStatus(id, isInBookmark, noop)}>
                        <svg className="property__bookmark-icon" width="31" height="33">
                          <use xlinkHref="#icon-bookmark"></use>
                        </svg>
                        <span className="visually-hidden">To bookmarks</span>
                      </button>
                    </div>
                    <div className="property__rating rating">
                      <div className="property__stars rating__stars">
                        <span style={{width: raitingStarPercent}}></span>
                        <span className="visually-hidden">Rating</span>
                      </div>
                      <span className="property__rating-value rating__value">{raiting}</span>
                    </div>
                    <ul className="property__features">
                      <li className="property__feature property__feature--entire">
                        {capitalize(OfferTypeMap[type])}
                      </li>
                      <li className="property__feature property__feature--bedrooms">
                        {bedrooms} Bedrooms
                      </li>
                      <li className="property__feature property__feature--adults">
                  Max {quests.adults} adults {quests.kids > 0 ? `& Max ${quests.kids} kids` : ``}
                      </li>
                    </ul>
                    <div className="property__price">
                      <b className="property__price-value">&euro;{price}</b>
                      <span className="property__price-text">&nbsp;night</span>
                    </div>
                    <div className="property__inside">
                      <h2 className="property__inside-title">What&apos;s inside</h2>
                      <ul className="property__inside-list">
                        {items.map((item, i) => {
                          return (
                            <li className="property__inside-item" key = {i + item}>
                              {item}
                            </li>
                          );
                        })
                        }
                      </ul>
                    </div>
                    <div className="property__host">
                      <h2 className="property__host-title">Meet the host</h2>
                      <div className="property__host-user user">
                        <div className={isSuper ? `property__avatar-wrapper--pro property__avatar-wrapper user__avatar-wrapper` : `property__avatar-wrapper user__avatar-wrapper`}>
                          <img className="property__avatar user__avatar" src={`/${avatar}`} width="74" height="74" alt="Host avatar" />
                        </div>
                        <span className="property__user-name">
                          {name}
                        </span>
                      </div>
                      <div className="property__description">
                        <p className="property__text">
                          {description}
                        </p>
                      </div>
                    </div>
                    <section className="property__reviews reviews">
                      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                      {
                        <ReviewsList
                          reviews = {reviews}
                        />
                      }
                      {authorizationStatus === AuthorizationStatus.AUTH ?
                        <NewReviewWrapper
                          onReviewFormSubmit = {onReviewFormSubmit}
                          id = {id}
                        /> : ``
                      }
                      {error === ErrorTypes.BAD_REQUEST ?
                        <ErrorBlock /> : ``}
                    </section>
                  </div>
                </div>
                <section className="property__map map">
                  {nearOffers.length > 0 ?
                    <MapProperty
                      currentOffer = {offer}
                      offers = {nearOffers}
                    /> :
                    ``}
                </section>
              </section>
              <div className="container">
                <section className="near-places places">
                  <h2 className="near-places__title">Other places in the neighbourhood</h2>
                  <OfferListNear
                    authorizationStatus = {authorizationStatus}
                    offers = {nearOffers}
                    onOfferTitleClick = {onOfferTitleClick}
                    onCardHoverOn = {onCardHoverOn}
                    onCardHoverOff = {onCardHoverOff}
                    onChangeFavoriteStatus = {onChangeFavoriteStatus}
                  />
                </section>
              </div>
            </main>
          </div>
        );
      }
    }
    return null;
  }

}


export default OfferProperty;
