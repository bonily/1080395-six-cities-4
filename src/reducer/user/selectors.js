import NameSpace from "../name-space";

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
