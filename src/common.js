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
  const cities = Object.keys(offers);
  const result = cities.map((city) => {
    return (
      offers[city][0].city
    );
  });

  return result;
};

export const getFilteredOffers = (offers, currentFilter) => {
  switch (currentFilter) {
    case FILTER_NAMES.LOW:
      return offers.sort((a, b) => a.price - b.price).slice();
    case FILTER_NAMES.HIGH:
      return offers.sort((a, b) => b.price - a.price).slice();
    case FILTER_NAMES.TOP:
      return offers.sort((a, b) => b.raiting - a.raiting).slice();
  }
  return offers.slice();
};

export const groupOffersByCity = (offers) =>
  offers.reduce((accumulator, offer) =>{
    const key = offer.city.name;

    if (accumulator[key] === void 0) {
      accumulator[key] = [];
    }
    accumulator[key].push(offer);

    return accumulator;
  }, {});

export const noop = () => {
  // do nothing
};
