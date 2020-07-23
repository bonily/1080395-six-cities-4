import {extend} from "../../common.js";

const initialState = {
  selectedFilter: `popular`,
  currentOfferId: -1,
  highlightedPinId: -1,
  currentPage: `main`,
};

const ActionType = {
  CHANGE_FILTER: `CHANGE_FILTER`,
  HIGHLIGHT_PIN: `HIGHLIGHT_PIN`,
  CHANGE_OFFER: `CHANGE_OFFER`,
  CHANGE_PAGE: `CHANGE_PAGE`,
};

const ActionCreator = {
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
  }),
  changePage: (page) => ({
    type: ActionType.CHANGE_PAGE,
    payload: page
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
    case ActionType.CHANGE_PAGE:
      return extend(state, {
        currentPage: action.payload
      });
  }
  return state;
};

export {reducer, ActionCreator, ActionType, initialState};
