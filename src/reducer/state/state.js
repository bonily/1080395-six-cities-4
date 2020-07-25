import {extend} from "../../common.js";

const initialState = {
  selectedFilter: `popular`,
  highlightedPinId: -1,
};

const ActionType = {
  CHANGE_FILTER: `CHANGE_FILTER`,
  HIGHLIGHT_PIN: `HIGHLIGHT_PIN`,
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
    case ActionType.CHANGE_STATUS:
      return extend(state, {
        isLoading: action.payload
      });
  }
  return state;
};

export {reducer, ActionCreator, ActionType, initialState};
