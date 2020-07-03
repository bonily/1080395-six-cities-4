import {reducer, ActionCreator, ActionType} from "./reducer.js";

describe(`reducerE2eTest`, () => {
  it(`Reducer should change selected city`, () => {
    expect(reducer({
    }, {
      type: ActionType.CHANGE_CITY,
      payload: `Paris`
    })).toEqual({
      selectedCity: `Paris`
    });
  });
});

describe(`reducerActionE2eTest`, () => {
  it(`Action creator for changing returns correct action`, () => {
    expect(ActionCreator.changeCity(`Moscow`)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: `Moscow`
    });
  });
});
