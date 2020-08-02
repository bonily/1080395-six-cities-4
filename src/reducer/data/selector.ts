import NameSpace from "../name-space";
import {createSelector} from "reselect";
import {getOffersByCity} from "../../common";
import {AppStateType} from "../reducer";

const NAME_SPACE = NameSpace.DATA;


export const getOffers = (state: AppStateType) => {
  return state[NAME_SPACE].offers;
};

export const getCity = (state: AppStateType) => {
  return state[NAME_SPACE].selectedCity;
};

export const getCities = (state: AppStateType) => {
  return state[NAME_SPACE].cities;
};

export const getAllOffers = (state: AppStateType) => {
  return state[NAME_SPACE].allOffers;
};

export const getCurrentOffers = createSelector(
    getOffers,
    getCity,
    (offers, city) => {
      return getOffersByCity(city, offers);
    }
);

export const getFavotiteOffers = (state: AppStateType) => {
  return state[NAME_SPACE].favoriteOffers;
};

export const getNearOffers = (state: AppStateType) => {
  return state[NAME_SPACE].nearOffers;
};
