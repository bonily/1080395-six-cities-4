import {reducer, ActionType} from "./error";

describe(`ErrorE2eTest`, () => {
  it(`Reducer should change error`, () => {
    expect(reducer({
    }, {
      type: ActionType.SET_ERROR,
      payload: 404
    })).toEqual({
      error: 404
    });
  });
  it(`Reducer without state value should return initual state`, () => {
    expect(reducer(void 0, {})).toEqual({
      error: `error`
    });
  });
});
