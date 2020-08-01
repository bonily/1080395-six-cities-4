import {extend} from "../../common.js";
import {ActionCreator as ActionCreatorError} from "../error/error";
import {adapterReview} from "../../adapter/reviews";


const initialState = {
  reviews: [],
};

const ActionType = {
  LOAD_REVIEWS: `LOAD_REVIEWS`,
};

const ActionCreator = {
  loadReviews: (reviews) => {
    return {
      type: ActionType.LOAD_REVIEWS,
      payload: reviews.map((review) => adapterReview(review))
    };
  },
};

const Operation = {
  loadReviews: (id) => (dispatch, getState, api) => {
    return api.get(`/comments/${id}`)
    .then((response) => {
      dispatch(ActionCreator.loadReviews((response.data)));
    });
  },
  newReview: (CommentPost, id, resetForm, blockForm) => (dispatch, getState, api) => {
    dispatch(ActionCreatorError.setError(``));
    blockForm();
    return api.post(`/comments/${id}`, {
      comment: CommentPost.comment,
      rating: CommentPost.rating
    })
    .then((response) => {
      dispatch(ActionCreator.loadReviews(response.data));
      blockForm();
      resetForm();
    })
    .catch(() => {
      blockForm();
    });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });
  }
  return state;
};

export {reducer, Operation, ActionType, ActionCreator};
