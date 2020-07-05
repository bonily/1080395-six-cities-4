import {extend, getCitiesFromOffers} from "./common.js";
import {OFFERS} from "./mocks/offers.js";


const initialState = {
  selectedCity: getCitiesFromOffers(OFFERS)[0],
  offers: OFFERS,
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_NEW_OFFERS: `GET_NEW_OFFERS`
};

const ActionCreator = {
  changeCity: (city) => (
    {
      type: ActionType.CHANGE_CITY,
      payload: city
    })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        selectedCity: action.payload,
      });

  }
  return state;
};


export {reducer, ActionCreator, ActionType, initialState};
