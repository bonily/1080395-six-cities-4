import React from "react";
import PropTypes from "prop-types";
import {capitalize} from "../../common.js";
import {MAX_STAR_COUNT} from "../../const.js";

const OfferTypeMap = {
  apartment: `apartment`,
  room: `private room`,
  house: `house`,
  hotel: `hotel`
};

const imageSizes = {
  favorites: {
    width: `150px`,
    height: `110px`
  },
  cities: {
    width: `260px`,
    height: `200px`
  },
  near: {
    width: `260px`,
    height: `200px`
  },
};


const OfferCard = (props) => {

  const {className, offer, onOfferTitleClick, onCardHoverOn, onCardHoverOff} = props;
  const {id, title, price, type, isInBookmark, isPremium, raiting} = offer;
  const raitingStarPercent = (Math.round(raiting) / MAX_STAR_COUNT * 100) + `%`;

  return (
    <article className={`${className}__place-card place-card`}onMouseEnter = {() => onCardHoverOn(id)} onMouseLeave = {onCardHoverOff}>
      {isPremium ? <div className="place-card__mark">
        <span>Premium</span></div> : ``}
      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <a href="#">

          <img className="place-card__image" src="img/apartment-03.jpg" style={{width: imageSizes[className].width, height: imageSizes[className].height}} alt="Place image"/> :
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className= {isInBookmark ? `place-card__bookmark-button place-card__bookmark-button--active button` : `place-card__bookmark-button button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: raitingStarPercent}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#"
            onClick = {() =>onOfferTitleClick(id)}
          >{title}</a>
        </h2>
        <p className="place-card__type">{capitalize(OfferTypeMap[type])}</p>
      </div>
    </article>
  );
};


OfferCard.propTypes = {
  className: PropTypes.string.isRequired,
  onCardHoverOn: PropTypes.func.isRequired,
  onCardHoverOff: PropTypes.func.isRequired,
  offer:
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        raiting: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        isInBookmark: PropTypes.bool.isRequired,
        isPremium: PropTypes.bool.isRequired,
      }),
  onOfferTitleClick: PropTypes.func.isRequired,
};

export default OfferCard;
