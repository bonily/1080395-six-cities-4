import NameSpace from "../name-space";
import {AppStateType} from "../reducer";

const NAME_SPACE = NameSpace.ERROR;

export const getErrorStatus = (state: AppStateType) => {
  return state[NAME_SPACE].error;
};
