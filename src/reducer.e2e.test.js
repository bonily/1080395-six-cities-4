import {reducer, ActionCreator, ActionType} from "./reducer.js";
import {OFFERS} from "./mocks/offers.js";
import {getCitiesFromOffers} from "./common.js";

const initialState = {
  selectedCity: getCitiesFromOffers(OFFERS)[0],
  selectedFilter: `popular`,
  offers: OFFERS,
  highlightedPinId: -1,
  currentOfferId: -1,
  isLoginComplete: false,
  currentPage: ``,
  userName: ``

};


describe(`reducerE2eTest`, () => {

  describe(`Should change city`, () => {
    it(`Reducer should change selected city`, () => {
      expect(reducer({
      }, {
        type: ActionType.CHANGE_CITY,
        payload: `Paris`
      })).toEqual({
        selectedCity: `Paris`
      });
    });

    it(`Action creator for changing city returns correct action`, () => {
      expect(ActionCreator.changeCity(`Moscow`)).toEqual({
        type: ActionType.CHANGE_CITY,
        payload: `Moscow`
      });
    });
  });

  describe(`Should change filter`, () => {
    it(`Reducer should change selected filter`, () => {
      expect(reducer({
      }, {
        type: ActionType.CHANGE_FILTER,
        payload: `low`
      })).toEqual({
        selectedFilter: `low`
      });
    });

    it(`Action creator for changing filter returns correct action`, () => {
      expect(ActionCreator.changeFilter(`low`)).toEqual({
        type: ActionType.CHANGE_FILTER,
        payload: `low`
      });
    });
  });

  describe(`Should highlight pin`, () => {
    it(`Reducer should change pin id`, () => {
      expect(reducer({
      }, {
        type: ActionType.HIGHLIGHT_PIN,
        payload: 1
      })).toEqual({
        highlightedPinId: 1
      });
    });

    it(`Action creator for highlighting returns correct action`, () => {
      expect(ActionCreator.highlightPin(2)).toEqual({
        type: ActionType.HIGHLIGHT_PIN,
        payload: 2
      });
    });
  });

  describe(`Should change current offer id`, () => {
    it(`Reducer should change offer id`, () => {
      expect(reducer({
      }, {
        type: ActionType.CHANGE_OFFER,
        payload: 5
      })).toEqual({
        currentOfferId: 5
      });
    });

    it(`Action creator for highlighting returns correct action`, () => {
      expect(ActionCreator.changeOffer(3)).toEqual({
        type: ActionType.CHANGE_OFFER,
        payload: 3
      });
    });
  });

  it(`Reducer without state value should return initual state`, () => {
    expect(reducer(void 0, {})).toEqual({
      selectedCity: initialState.selectedCity,
      offers: initialState.offers,
      selectedFilter: initialState.selectedFilter,
      highlightedPinId: initialState.highlightedPinId,
      currentOfferId: initialState.currentOfferId,
      currentPage: initialState.currentPage,
      isLoginComplete: initialState.isLoginComplete,
      userName: initialState.userName
    });
  });
});

