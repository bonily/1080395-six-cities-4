import * as React from "react";
import {MAX_STAR_COUNT, ErrorTypes} from "../../const.js";
import {capitalize} from "../../common.js";
import ReviewsList from "../reviews-list/reviews-list";
import {OfferListNear} from "../offer-list-near/offer-list-near";
import MapProperty from "../map-property/map-property";
import HeaderBlock from "../header-block/header-block";
import NewReview from "../new-review/new-review";
import withFormReview from "../../hoc/with-form-review/with-form-review";
import ErrorBlock from "../error-block/error-block";
import {Offer, Review} from "../../types";


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
  error: string | number,
  offers: Offer[],
  onOfferTitleClick: (arg0: number) => void,
  onCardHoverOn: (arg0: number) => void,
  onCardHoverOff: () => void,
  authorizationStatus: string,
  userName: string,
  loadFavoriteOffers: () => void,
  reviews: Review[],
  onReviewFormSubmit: ({comment, rating}: {comment: string, rating: number}) => void,
  changeFavoriteStatus: () => void,
  highlightedPinId: number,
  nearOffers: Offer[],
  routeProps: {match: {
                params: {
                  id: number
                }},
                history: {
                  action: string
                }
              },
  loadAllOffers: (number) => void
};

const NewReviewWrapper = withFormReview(NewReview);


const OfferProperty: React.FunctionComponent<Props> = (props: Props) => {

  const {offers, onOfferTitleClick, onCardHoverOn, onCardHoverOff, authorizationStatus, userName, loadFavoriteOffers, reviews, onReviewFormSubmit, error, routeProps, highlightedPinId, nearOffers, changeFavoriteStatus, loadAllOffers} = props;

  const id = routeProps.match.params.id;
  console.log(routeProps)

  if (routeProps.history.action === "POP") {
    loadAllOffers(id)
  }

  if (offers.length > 1) {

    const offer = offers.find((currentOffer) => currentOffer.id === Number(id));
    const {title, description, price, raiting, bedrooms, quests, items, type, isInBookmark, isPremium, host} = offer;
    const {avatar, name, isSuper} = host;
    const raitingStarPercent = (Math.round(raiting) / MAX_STAR_COUNT * 100) + `%`;


    const photos = offer.photos.slice(0, 6);

    return (
      <div className="page">
        <HeaderBlock
          authorizationStatus = {authorizationStatus}
          name = {userName}
          loadFavoriteOffers = {loadFavoriteOffers}
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
                  <button className= {isInBookmark ? `property__bookmark-button property__bookmark-button--active button` : `property__bookmark-button button`} type="button">
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
                  highlightedPinId = {highlightedPinId}
                /> :
                ``}
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <OfferListNear
                offers = {nearOffers}
                onOfferTitleClick = {onOfferTitleClick}
                onCardHoverOn = {onCardHoverOn}
                onCardHoverOff = {onCardHoverOff}
                changeFavoriteStatus = {changeFavoriteStatus}
                authorizationStatus = {authorizationStatus}
              />
            </section>
          </div>
        </main>
      </div>
    );
  }
  return null;
};


export default OfferProperty;
