import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/app/app";
import {createStore, compose, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import reducer from "./reducer/reducer";
import thunk from "redux-thunk";
import {createAPI} from "./api.js";
import {Operation as DataOperation} from "./reducer/data/data";
import {Operation as UserOperation, ActionCreator, AuthorizationStatus} from "./reducer/user/user";
import {ActionCreator as ActionCreatorError} from "./reducer/error/error";


const onUnauthorized = () => {
  store.dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.NO_AUTH));
};

const onNetworkError = (error) => {
  store.dispatch(ActionCreatorError.setError(error));
};

const api = createAPI(onUnauthorized, onNetworkError);

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
    )
);

store.dispatch(DataOperation.loadOffers());
store.dispatch(UserOperation.checkAuth());

ReactDOM.render(
    <Provider store = {store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);

