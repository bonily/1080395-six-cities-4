import {extend, getCitiesFromOffers, groupOffersByCity, updateOffers} from "../../common.js";
import {adapterOffer} from "../../adapter/offers.js";
import history from "../../history.js";


const initialState = {
  offers: {city: []},
  selectedCity: `city`,
  cities: [],
  favoriteOffers: {},
  nearOffers: [],
  allOffers: []
};

const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  CHANGE_CITY: `CHANGE_CITY`,
  LOAD_FAVORITE: `LOAD_FAVORITE`,
  UPDATE_OFFERS: `UPDATE_OFFERS`,
  LOAD_NEAR: `LOAD_NEAR`,
  LOAD_ALL_OFFERS: `LOAD_ALL_OFFERS`,
};

const ActionCreator = {
  loadOffers: (offers) => {
    return {
      type: ActionType.LOAD_OFFERS,
      payload: groupOffersByCity(offers.map((offer) => adapterOffer(offer)))
    };
  },
  loadAllOffers: (offers) => {
    return {
      type: ActionType.LOAD_ALL_OFFERS,
      payload: offers.map((offer) => adapterOffer(offer))
    };
  },
  changeCity: (city) => (
    {
      type: ActionType.CHANGE_CITY,
      payload: city
    }),
  loadFavoriteOffers: (offers) => {
    return {
      type: ActionType.LOAD_FAVORITE,
      payload: groupOffersByCity(offers.map((offer) => adapterOffer(offer)))
    };
  },
  loadNearOffers: (offers) => {
    return {
      type: ActionType.LOAD_NEAR,
      payload: offers.map((offer) => adapterOffer(offer))
    };
  },
  updateOffers: (offer) => {
    return {
      type: ActionType.UPDATE_OFFERS,
      payload: adapterOffer(offer)
    };
  }
};

const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
    .then((response) => {
      dispatch(ActionCreator.loadOffers((response.data)));
      dispatch(ActionCreator.loadAllOffers((response.data)));
    });
  },
  loadFavoriteOffers: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
    .then((response) => {
      dispatch(ActionCreator.loadFavoriteOffers((response.data)));
    });
  },
  loadNearOffers: (id) => (dispatch, getState, api) => {
    return api.get(`/hotels/${id}/nearby`)
    .then((response) => {
      dispatch(ActionCreator.loadNearOffers((response.data)));
    });
  },
  changeFavoriteStatus: (id, status, onFavoriteStatusChange) => (dispatch, getState, api) => {
    return api.post(`/favorite/${id}/${status}`)
    .then((response) => {
      onFavoriteStatusChange();
      dispatch(ActionCreator.updateOffers(response.data));
    })
    .catch(() => history.push(`/login`));
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
    case ActionType.LOAD_FAVORITE:
      return extend(state, {
        favoriteOffers: action.payload,
      });
    case ActionType.LOAD_NEAR:
      return extend(state, {
        nearOffers: action.payload,
      });
    case ActionType.LOAD_ALL_OFFERS:
      return extend(state, {
        allOffers: action.payload,
      });
    case ActionType.UPDATE_OFFERS:
      return extend(state, {
        allOffers: updateOffers(state.allOffers, action.payload),
      });
  }
  return state;
};

export {reducer, Operation, ActionType, ActionCreator};
