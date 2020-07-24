import NameSpace from "../name-space";

const NAME_SPACE = NameSpace.REVIEW;

export const getReviews = (state) => {
  return state[NAME_SPACE].reviews;
};
