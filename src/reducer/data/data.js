import {extend, getCitiesFromOffers, groupOffersByCity} from "../../common.js";
import {adapterOffer} from "../../adapter/offers.js";


const initialState = {
  offers: {},
  selectedCity: ``,
  cities: []
};

const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  CHANGE_CITY: `CHANGE_CITY`,
};

const ActionCreator = {
  loadOffers: (offers) => {
    return {
      type: ActionType.LOAD_OFFERS,
      payload: groupOffersByCity(offers.map((offer) => adapterOffer(offer)))
    };
  },
  changeCity: (city) => (
    {
      type: ActionType.CHANGE_CITY,
      payload: city
    }),

};

const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
    .then((response) => {
      dispatch(ActionCreator.loadOffers((response.data)));
    });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload,
        selectedCity: getCitiesFromOffers(action.payload)[0].name || ``,
        cities: getCitiesFromOffers(action.payload),
      });
    case ActionType.CHANGE_CITY:
      return extend(state, {
        selectedCity: action.payload,
      });
  }
  return state;
};

export {reducer, Operation, ActionType, ActionCreator};
