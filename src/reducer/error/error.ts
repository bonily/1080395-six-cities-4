import {extend} from "../../common.js";

const initialState = {
  error: `error`
};

const ActionType = {
  SET_ERROR: `SET_ERROR`
};

const ActionCreator = {
  setError: (error) => (
    {
      type: ActionType.SET_ERROR,
      payload: error
    }
  )
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_ERROR:
      return extend(state, {
        error: action.payload
      });
  }
  return state;
};

export {ActionCreator, reducer, ActionType};
