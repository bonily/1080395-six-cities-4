import NameSpace from "../name-space";
import { AppStateType } from "../reducer";

const NAME_SPACE = NameSpace.USER;


export const getAuthorizationStatus = (state) => {
  return state[NAME_SPACE].authorizationStatus;
};

export const getUserName = (state) => {
  return state[NAME_SPACE].name;
};

export const getUserId = (state) => {
  return state[NAME_SPACE].id;
};
