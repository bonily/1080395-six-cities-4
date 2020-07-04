import {FILTER_NAMES} from "./const.js";


export const capitalize = (value) => {
  return value.charAt(0).toUpperCase() + value.slice(1);
};

export const split = (text) => {
  return text.split(`. `);
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getUnicValues = (values) => {
  return values.filter((value, i) => values.indexOf(value) === i);
};

export const getOffersByCity = (city, offers) => {
  return offers[city];
};

export const getCitiesFromOffers = (offers) => {
  return Object.keys(offers);
};

export const getFilteredOffers = (offers, currentFilter) => {
  switch (currentFilter) {
    case FILTER_NAMES.LOW:
      return offers.sort((a, b) => a.price - b.price);
    case FILTER_NAMES.HIGH:
      return offers.sort((a, b) => b.price - a.price);
    case FILTER_NAMES.TOP:
      return offers.sort((a, b) => b.raiting - a.raiting);
  }
  return offers;
};


