import MockAdapter from "axios-mock-adapter";
import {reducer, Operation, ActionType} from "./review";
import {createAPI} from "../../api.js";

const api = createAPI(() => {});

const initialState = {
  reviews: [],
};

const review = {
  user: {
    "name": `Max`,
    "avatar_url": `img/avatar-max.jpg`,
    "rating": 4
  },
  rating: 4,
  comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
  date: `2019-04-24`,
  id: 1,
};

const currentReview = {
  user: {
    "name": `Max`,
    "avatarUrl": `img/avatar-max.jpg`,
    "rating": 4
  },
  rating: 4,
  comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
  date: `2019-04-24`,
  id: 1,
};


describe(`Reviewe2eTest`, () => {
  it(`Reducer without state value should return initual state`, () => {
    expect(reducer(void 0, {})).toEqual({
      reviews: initialState.reviews
    });
  });
  it(`hould make a correct API call to /comments/{id}`, () => {
    const id = 5;
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const reviewsLoader = Operation.loadReviews(id);

    apiMock
    .onGet(`/comments/${id}`)
    .reply(200, [review]);

    return reviewsLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenCalledWith({
        type: ActionType.LOAD_REVIEWS,
        payload: [currentReview],
      });
    });
  });
  it(`hould make a correct API call to /comments/{id} with new comment`, () => {
    const id = 5;
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const resetForm = jest.fn();
    const blockForm = jest.fn();
    const CommentPost = {
      comment: `ttttttttttttttttttttt`,
      rating: 5
    };
    const reviewsLoader = Operation.newReview(CommentPost, id, resetForm, blockForm);

    apiMock
    .onPost(`/comments/${id}`)
    .reply(200, [review]);


    return reviewsLoader(dispatch, () => {}, api)


    .then(() => {
      expect(blockForm).toHaveBeenCalled();
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenCalledWith({
        type: ActionType.LOAD_REVIEWS,
        payload: [currentReview],
      });
      expect(resetForm).toHaveBeenCalled();
    });
  });
});
