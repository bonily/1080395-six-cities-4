import {reducer, ActionCreator, ActionType} from "./reducer.js";
import {OFFERS} from "./mocks/offers.js";
import {getCitiesFromOffers} from "./common.js";

const initialState = {
  selectedCity: getCitiesFromOffers(OFFERS)[0],
  offers: OFFERS,
};


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

  it(`Reducer without state value should return initual state`, () => {
    expect(reducer(void 0, {})).toEqual({
      selectedCity: initialState.selectedCity,
      offers: initialState.offers
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
