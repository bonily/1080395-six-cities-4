import {extend} from "../../common.js";
import {ActionCreator as ActionCreatorState} from "../state/state.js";

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`
};

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  name: ``
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  AUTHORIZATION: `AUTHORIZATION`
};

const ActionCreator = {
  requiredAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };
  },
  authorization: (name) => {
    return {
      type: ActionType.AUTHORIZATION,
      payload: name
    };
  }

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload
      });
    case ActionType.AUTHORIZATION:
      return extend(state, {
        name: action.payload
      });
  }
  return state;
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.authorization(response.data.email));
      })
      .catch((err) => {
        throw err;
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.login,
      password: authData.password,
    })
    .then(() => {
      dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH));
    })
    .then(() => dispatch(ActionCreatorState.changePage(`main`)));
  }
};

export {ActionCreator, ActionType, AuthorizationStatus, Operation, reducer};
