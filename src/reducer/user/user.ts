import {extend} from "../../common.js";
import {ActionCreator as ActionCreatorError} from "../error/error.js";
import {ErrorTypes} from "../../const.js";
import history from "../../history.js";

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`
};

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  name: ``,
  id: -1
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
  authorization: (data) => {
    return {
      type: ActionType.AUTHORIZATION,
      payload: data
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
        name: action.payload.email,
        id: action.payload.id,
      });
  }
  return state;
};

export type userReducer = typeof reducer;
export type userStateType = ReturnType<userReducer>

const user: userStateType;

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.authorization(response.data));
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
    .then((response) => {
      dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.authorization(response.data));
      history.push(`/`);
    })
    .catch((response) => {
      if (response.status === ErrorTypes.BAD_REQUEST) {
        dispatch(ActionCreatorError.setError(ErrorTypes.BAD_REQUEST));
      }
    }


    );
  }
};

export {ActionCreator, ActionType, AuthorizationStatus, Operation, reducer};
