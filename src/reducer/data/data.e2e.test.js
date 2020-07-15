import MockAdapter from "axios-mock-adapter";
import {reducer, Operation, ActionType} from "./data.js";
import {createAPI} from "../../api.js";

const initialState = {
  offers: {},
  selectedCity: ``,
  cities: []
};

const api = createAPI(() => {});


describe(`DataE2eTest`, () => {
  it(`Reducer without state value should return initual state`, () => {
    expect(reducer(void 0, {})).toEqual({
      selectedCity: initialState.selectedCity,
      offers: initialState.offers,
      cities: [],
    });
  });
  it(`hould make a correct API call to /hotels`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = Operation.loadOffers();

    apiMock
    .onGet(`/hotels`)
    .reply(200, [{fake: true}]);

    return offersLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenCalledWith(1, {
        type: ActionType.LOAD_OFFERS,
        payload: [{fake: true}],
      });
    });
  });
});
