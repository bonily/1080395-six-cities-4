import MockAdapter from "axios-mock-adapter";
import {reducer, Operation, ActionType, ActionCreator} from "./data";
import {createAPI} from "../../api.js";
import {noop} from "../../common";

const initialState = {
  offers: {city: []},
  selectedCity: `city`,
  cities: [],
  favoriteOffers: {},
  nearOffers: [],
  allOffers: []
};

const initialOffers = [
  {
    "bedrooms": 1,
    "city": {
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13},
      name: `Dusseldorf`
    },
    "description": `A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.`,
    "goods": [`Air conditioning`, `Towels`, `Washer`, `Baby seat`, `Laptop friendly workspace`, `Breakfast`],
    "host": {
      "id": 25,
      "name": `Angelina`,
      "is_pro": true,
      "avatar_url": `img/avatar-angelina.jpg`
    },
    "id": 1,
    "images": [`https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`],
    "is_favorite": false,
    "is_premium": false,
    "location": {latitude: 51.217402, longitude: 6.7693140000000005, zoom: 16},
    "max_adults": 3,
    "preview_image": `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
    "price": 282,
    "rating": 4,
    "title": `Wood and stone place`,
    "type": `room`,
  }];

const currentOffers = {
  Dusseldorf:
  [{
    bedrooms: 1,
    city: {
      name: `Dusseldorf`,
      coords: [51.225402, 6.776314],
      zoom: 13},
    coords: [51.217402, 6.7693140000000005],
    description: `A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.`,
    host: {avatar: `img/avatar-angelina.jpg`, name: `Angelina`, isSuper: true},
    id: 1,
    isInBookmark: false,
    isPremium: false,
    items: [`Air conditioning`, `Towels`, `Washer`, `Baby seat`, `Laptop friendly workspace`, `Breakfast`],
    photos: [`https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`],
    price: 282,
    quests: {adults: 3, kids: 0},
    raiting: 4,
    title: `Wood and stone place`,
    type: `apartment`,
  }]
};

const nearOffers =
  [{
    bedrooms: 1,
    city: {
      name: `Dusseldorf`,
      coords: [51.225402, 6.776314],
      zoom: 13},
    coords: [51.217402, 6.7693140000000005],
    description: `A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.`,
    host: {avatar: `img/avatar-angelina.jpg`, name: `Angelina`, isSuper: true},
    id: 1,
    isInBookmark: false,
    isPremium: false,
    items: [`Air conditioning`, `Towels`, `Washer`, `Baby seat`, `Laptop friendly workspace`, `Breakfast`],
    photos: [`https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`],
    price: 282,
    quests: {adults: 3, kids: 0},
    raiting: 4,
    title: `Wood and stone place`,
    type: `apartment`,
  }];

const api = createAPI(() => noop);


describe(`DataE2eTest`, () => {
  it(`Reducer without state value should return initual state`, () => {
    expect(reducer(void 0, {})).toEqual({
      selectedCity: initialState.selectedCity,
      offers: initialState.offers,
      cities: [],
      nearOffers: initialState.nearOffers,
      favoriteOffers: initialState.favoriteOffers,
      allOffers: initialState.allOffers,

    });
  });
  it(`hould make a correct API call to /hotels`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = Operation.loadOffers();

    apiMock
    .onGet(`/hotels`)
    .reply(200, initialOffers);

    return offersLoader(dispatch, () => noop, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenCalledWith({
        type: ActionType.LOAD_OFFERS,
        payload: currentOffers,
      });
    });
  });
  it(`hould make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = Operation.loadFavoriteOffers();

    apiMock
    .onGet(`/favorite`)
    .reply(200, initialOffers);

    return offersLoader(dispatch, () => noop, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenCalledWith({
        type: ActionType.LOAD_FAVORITE,
        payload: currentOffers,
      });
    });
  });
  it(`hould make a correct API call to /nearOffers`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 2;
    const offersLoader = Operation.loadNearOffers(2);


    apiMock
    .onGet(`/hotels/${id}/nearby`)
    .reply(200, initialOffers);

    return offersLoader(dispatch, () => noop, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenCalledWith({
        type: ActionType.LOAD_NEAR,
        payload: nearOffers,
      });
    });
  });
  it(`hould make a correct API call to /favorite/status`, () => {
    const apiMock = new MockAdapter(api);
    const onFavoriteStatusChange = jest.fn();
    const id = initialOffers[0].id;
    const status = (!initialOffers.is_favorite) ? 1 : 0;
    const offersLoader = Operation.changeFavoriteStatus(id, status, onFavoriteStatusChange);


    apiMock
    .onPost(`/favorite/${id}/${status}`)
    .reply(200, initialOffers[0]);

    return offersLoader(() => noop, () => noop, api)
    .then(() => {
      expect(onFavoriteStatusChange).toHaveBeenCalledTimes(1);
    });
  });
  it(`Should make a correct operation with error answer`, () => {
    const apiMock = new MockAdapter(api);
    const onFavoriteStatusChange = jest.fn();
    const history = {push: jest.fn()};
    const id = initialOffers[0].id;
    const status = (!initialOffers.is_favorite) ? 1 : 0;
    const offersLoader = Operation.changeFavoriteStatus(id, status, onFavoriteStatusChange);


    apiMock
    .onPost(`/favorite/${id}/${status}`)
    .reply(404);

    return offersLoader(() => noop, () => noop, api)
    .catch(() => {
      expect(history.push).toHaveBeenCalledWith(`/login`);
    });
  });


  it(`Reducer should change city by a given value`, () => {
    expect(ActionCreator.changeCity(`Paris`)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: `Paris`
    });
  });
});
