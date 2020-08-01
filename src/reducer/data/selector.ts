import NameSpace from "../name-space";
import {createSelector} from "reselect";
import {getOffersByCity} from "../../common.js";

const NAME_SPACE = NameSpace.DATA;


export const getOffers = (state) => {
  return state[NAME_SPACE].offers;
};

export const getCity = (state) => {
  return state[NAME_SPACE].selectedCity;
};

export const getCities = (state) => {
  return state[NAME_SPACE].cities;
};

export const getAllOffers = (state) => {
  return state[NAME_SPACE].allOffers;
};

export const getCurrentOffers = createSelector(
    getOffers,
    getCity,
    (offers, city) => {
      return getOffersByCity(city, offers);
    }
);

export const getFavotiteOffers = (state) => {
  return state[NAME_SPACE].favoriteOffers;
};

export const getNearOffers = (state) => {
  return state[NAME_SPACE].nearOffers;
};
