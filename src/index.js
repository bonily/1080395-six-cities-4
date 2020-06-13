import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {OFFERS} from "./const.js";

const Settings = {
  OFFERS_COUNT: 312
};

ReactDOM.render(
    <App
      offersCount = {Settings.OFFERS_COUNT}
      offers = {OFFERS}
    />,
    document.querySelector(`#root`)
);

console.log(document.querySelector(`.place-card__name a`));


