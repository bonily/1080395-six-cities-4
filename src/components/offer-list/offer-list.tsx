import * as React from "react";
import OfferCard from "../offer-card/offer-card";
import {getFilteredOffers} from "../../common.js";
import {withFavoriteFlag} from "../../hoc/with-favorite-flag/with-favorite-flag";
import {Offer} from "../../types";

interface Props {
  selectedFilter: string;
  nameClass: string;
  authorizationStatus: string;
  offers: Offer[];
  onOfferTitleClick: (arg0: number) => void;
  onChangeFavoriteStatus: (arg0: number, arg1: boolean, arg2: () => void) => void;
  onCardHoverOn: (arg0: number) => void;
  onCardHoverOff: () => void;

}

const OfferCardWrapped = withFavoriteFlag(OfferCard);

const OfferList: React.FunctionComponent<Props> = (props: Props) => {
  const {nameClass, offers, selectedFilter, onOfferTitleClick, onCardHoverOn, onCardHoverOff, onChangeFavoriteStatus} = props;
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
          onChangeFavoriteStatus = {onChangeFavoriteStatus}
        />
      ))}
    </div>
  );
};


export default OfferList;
