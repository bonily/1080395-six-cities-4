/* eslint-disable max-nested-callbacks */
import {reducer, ActionCreator, ActionType, AuthorizationStatus, Operation} from "./user";
import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api.js";


const user = {
  avatarUrl: `/static/avatar/2.jpg`,
  email: `bonily@rambler.ru`,
  id: 1,
  isPro: false,
  name: `bonily`,
};

const api = createAPI(() => {});

describe(`UserE2eTest`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      name: ``,
      id: -1
    });
  });

  it(`Reducer should change authorizationStatus by a given value`, () => {
    expect(reducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
    });

    expect(reducer({
      authorizationStatus: AuthorizationStatus.AUTH,
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    });

    expect(reducer({
      authorizationStatus: AuthorizationStatus.AUTH,
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
    });

    expect(reducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    });

    expect(reducer({}, {
      type: ActionType.AUTHORIZATION,
      payload: user,
    })).toEqual({
      name: user.email,
      id: user.id
    });
  });


  describe(`Action creators work correctly`, () => {
    it(`Action creator for require authorization returns correct action`, () => {
      expect(ActionCreator.requiredAuthorization(AuthorizationStatus.NO_AUTH)).toEqual({
        type: ActionType.REQUIRED_AUTHORIZATION,
        payload: AuthorizationStatus.NO_AUTH,
      });

      expect(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH)).toEqual({
        type: ActionType.REQUIRED_AUTHORIZATION,
        payload: AuthorizationStatus.AUTH,
      });
    });
  });
  describe(`Operatios work correctly`, () => {
    it(`Dhould make a correct API call to /login`, () => {
      const apiMock = new MockAdapter(api);
      const dispatch = jest.fn();
      const authLoader = Operation.checkAuth();

      apiMock
      .onGet(`/login`)
      .reply(200, user);

      return authLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenCalledWith({
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
        expect(dispatch).toHaveBeenCalledWith({
          type: ActionType.AUTHORIZATION,
          payload: user
        });
      });
    });
  });
  it(`Should make a correct API call to /login with post`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const history = {push: jest.fn()};
    const authData = {
      login: user.email,
      password: 123456
    };
    const authLoader = Operation.login(authData);

    apiMock
    .onPost(`/login`)
    .reply(200, user);

    return authLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenCalledWith({
        type: ActionType.REQUIRED_AUTHORIZATION,
        payload: AuthorizationStatus.AUTH,
      });
      expect(dispatch).toHaveBeenCalledWith({
        type: ActionType.AUTHORIZATION,
        payload: user
      });
      expect(history.push).toHaveBeenCalled();
    });
  });


  // it(`Should go to the main page after login`, () => {
  //   const apiMock = new MockAdapter(api);
  //   const dispatch = jest.fn();
  //   const history = {push: jest.fn()};
  //   const authData = {
  //     login: user.email,
  //     password: 123456
  //   };
  //   const authLoader = Operation.login(authData);

  //   apiMock
  //   .onPost(`/login`)
  //   .reply(200, user);

  //   return authLoader(() => {}, () => {}, api)
  //   .then(() => {
  //     expect(history.push).toHaveBeenCalled();
  //   });
  // });
});


