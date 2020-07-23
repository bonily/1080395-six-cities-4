import NameSpace from "../name-space";

const NAME_SPACE = NameSpace.ERROR;

export const getErrorStatus = (state) => {
  return state[NAME_SPACE].error;
};
