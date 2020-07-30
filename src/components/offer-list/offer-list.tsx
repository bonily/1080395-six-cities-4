import * as React from "react";
import OfferCard from "../offer-card/offer-card";
import {getFilteredOffers} from "../../common.js";
import {withFavoriteFlag} from "../../hoc/with-favorite-flag/with-favorite-flag";
import {Offer} from "../../types";

interface Props {
  selectedFilter: string,
  nameClass: string,
  onCardHoverOn: (arg0: number) => void,
  onCardHoverOff: () => void,
  offers: Offer[],
  onOfferTitleClick: (arg0: number) => void,
  changeFavoriteStatus: () => void,
  authorizationStatus: string
}

const OfferCardWrapped = withFavoriteFlag(OfferCard);

class OfferList extends React.PureComponent<Props, {}> {
  constructor(props) {
    super(props);
  }

  render() {
    const {nameClass, offers, onOfferTitleClick, onCardHoverOn, onCardHoverOff, selectedFilter, changeFavoriteStatus, authorizationStatus} = this.props;
    const currentOffers = selectedFilter ? getFilteredOffers(offers, selectedFilter) : offers;

    return (
      <div className={`${nameClass}__places-list places__list tabs__content`}>
        {currentOffers.map((offer) => (
          <OfferCardWrapped key = {offer.id}
            nameClass = {nameClass}
            offer = {offer}
            onOfferTitleClick = {onOfferTitleClick}
            onCardHoverOn = {onCardHoverOn}
            onCardHoverOff = {onCardHoverOff}
            changeFavoriteStatus = {changeFavoriteStatus}
          />
        ))}
      </div>
    );
  }
}


export default OfferList;
