import * as React from "react";
import UserBlock from "../user-block/user-block";
import {Link, Router} from "react-router-dom";
import history from "../../history.js";


interface Props {
  authorizationStatus: string;
  name: string;
  onLoadFavoriteOffers: () => void;
}


const HeaderBlock: React.FunctionComponent<Props> = (props: Props) => {
  const {authorizationStatus, name, onLoadFavoriteOffers} = props;
  return (
    <Router history={history}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to="/" className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            {<UserBlock
              authorizationStatus = {authorizationStatus}
              name = {name}
              onLoadFavoriteOffers = {onLoadFavoriteOffers}
            />}
          </div>
        </div>
      </header>
    </Router>
  );
};

export default React.memo(HeaderBlock);
