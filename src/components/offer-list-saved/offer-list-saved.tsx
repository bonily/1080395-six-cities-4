import * as React from "react";
import {getCitiesFromOffers, groupOffersByCity} from "../../common";
import OfferCard from "../offer-card/offer-card";
import {withFavoriteFlag} from "../../hoc/with-favorite-flag/with-favorite-flag";
import {Offer} from "../../types";
import {noop} from "../../common";


interface Props {
  offers: Offer[];
  onOfferTitleClick: (arg0: number) => void;
  changeFavoriteStatus: () => void;
}

const OfferCardWrappered = withFavoriteFlag(OfferCard);

const OfferListSaved: React.FunctionComponent<Props> = (props: Props) => {

  const {offers, onOfferTitleClick, changeFavoriteStatus} = props;
  const nameClass = `favorites`;

  if (offers) {

    const currentOffers = groupOffersByCity(offers);
    const cities = getCitiesFromOffers(currentOffers);

    return (
      <ul className="favorites__list">
        {cities.map((city) => {
          return (
            <li className="favorites__locations-items" key={city.name}>
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#">
                    <span>{city.name}</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places">
                {currentOffers[city.name].map((offer) => (
                  <OfferCardWrappered
                    nameClass = {nameClass}
                    offer = {offer}
                    onOfferTitleClick = {onOfferTitleClick}
                    key = {offer.id}
                    onCardHoverOff = {noop}
                    onCardHoverOn = {noop}
                    changeFavoriteStatus = {changeFavoriteStatus}
                  />
                ))}
              </div>
            </li>
          );
        })}
      </ul>

    );
  }
  return null;
};


export default OfferListSaved;
