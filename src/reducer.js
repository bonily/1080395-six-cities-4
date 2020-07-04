import {extend, getCitiesFromOffers} from "./common.js";
import {OFFERS} from "./mocks/offers.js";


const initialState = {
  selectedCity: getCitiesFromOffers(OFFERS)[0],
  selectedFilter: `popular`,
  offers: OFFERS,
  highlightedPinId: -1,
  currentOfferId: -1
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_NEW_OFFERS: `GET_NEW_OFFERS`,
  CHANGE_FILTER: `CHANGE_FILTER`,
  HIGHLIGHT_PIN: `HIGHLIGHT_PIN`,
  CHANGE_OFFER: `CHANGE_OFFER`,
};

const ActionCreator = {
  changeCity: (city) => (
    {
      type: ActionType.CHANGE_CITY,
      payload: city
    }),
  changeFilter: (filter) => (
    {
      type: ActionType.CHANGE_FILTER,
      payload: filter
    }),
  highlightPin: (id) => ({
    type: ActionType.HIGHLIGHT_PIN,
    payload: id
  }),
  changeOffer: (id) => ({
    type: ActionType.CHANGE_OFFER,
    payload: id
  })


};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        selectedCity: action.payload,
      });
    case ActionType.CHANGE_FILTER:
      return extend(state, {
        selectedFilter: action.payload,
      });
    case ActionType.HIGHLIGHT_PIN:
      return extend(state, {
        highlightedPinId: action.payload
      });
    case ActionType.CHANGE_OFFER:
      return extend(state, {
        currentOfferId: action.payload
      });
  }
  return state;
};


export {reducer, ActionCreator, ActionType, initialState};
