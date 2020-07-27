import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card.jsx";
import {getFilteredOffers} from "../../common.js";
import {withFavoriteFlag} from "../../hoc/with-favorite-flag/with-favorite-flag.js";

const OfferCardWrapped = withFavoriteFlag(OfferCard);

class OfferList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {className, offers, onOfferTitleClick, onCardHoverOn, onCardHoverOff, selectedFilter, changeFavoriteStatus, authorizationStatus} = this.props;
    const currentOffers = selectedFilter ? getFilteredOffers(offers, selectedFilter) : offers;

    return (
      <div className={`${className}__places-list places__list tabs__content`}>
        {currentOffers.map((offer) => (
          <OfferCardWrapped
            className = {className}
            offer = {offer}
            onOfferTitleClick = {onOfferTitleClick}
            key = {offer.id}
            onCardHoverOn = {onCardHoverOn}
            onCardHoverOff = {onCardHoverOff}
            changeFavoriteStatus = {changeFavoriteStatus}
            authorizationStatus = {authorizationStatus}
          />
        ))}
      </div>
    );
  }
}


OfferList.propTypes = {
  selectedFilter: PropTypes.string,
  className: PropTypes.string.isRequired,
  onCardHoverOn: PropTypes.func.isRequired,
  onCardHoverOff: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        raiting: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        isInBookmark: PropTypes.bool.isRequired,
        isPremium: PropTypes.bool.isRequired,
      })
  ).isRequired,
  onOfferTitleClick: PropTypes.func.isRequired,
  changeFavoriteStatus: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired
};

export default OfferList;
