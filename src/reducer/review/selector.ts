import NameSpace from "../name-space";
import {AppStateType} from "../reducer";

const NAME_SPACE = NameSpace.REVIEW;

export const getReviews = (state: AppStateType) => {
  return state[NAME_SPACE].reviews;
};
