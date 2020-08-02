import NameSpace from "../name-space";
import {AppStateType} from "../reducer";

const NAME_SPACE = NameSpace.USER;


export const getAuthorizationStatus = (state: AppStateType) => {
  return state[NAME_SPACE].authorizationStatus;
};

export const getUserName = (state: AppStateType) => {
  return state[NAME_SPACE].name;
};

export const getUserId = (state: AppStateType) => {
  return state[NAME_SPACE].id;
};
