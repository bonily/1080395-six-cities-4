import {extend, getCitiesFromOffers} from "./common.js";
import {OFFERS} from "./mocks/offers.js";


const initialState = {
  selectedCity: getCitiesFromOffers(OFFERS)[0],
  selectedFilter: `popular`,
  offers: OFFERS,
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_NEW_OFFERS: `GET_NEW_OFFERS`,
  CHANGE_FILTER: `CHANGE_FILTER`
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

  }
  return state;
};


export {reducer, ActionCreator, ActionType, initialState};
