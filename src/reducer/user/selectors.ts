import NameSpace from "../name-space";
import { AppStateType } from "../reducer";
import { userStateType } from "./user";

const NAME_SPACE = NameSpace.USER;


export const getAuthorizationStatus = (state: userStateType) => {
  return state[NAME_SPACE].authorizationStatus;
};

export const getUserName = (state) => {
  return state[NAME_SPACE].name;
};

export const getUserId = (state) => {
  return state[NAME_SPACE].id;
};
