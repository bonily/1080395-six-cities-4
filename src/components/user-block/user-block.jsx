import React from "react";
import PropTypes from "prop-types";
import {Link, Router} from "react-router-dom";
import {AppRoute} from "../../const.js";
import history from "../../history.js";

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`
};

const UserBlock = (props) => {
  const {authorizationStatus, name, loadFavoriteOffers} = props;

  return (
    <Router history={history}>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <Link to = {AppRoute.FAVORITE} className="header__nav-link header__nav-link--profile" onClick = {() => loadFavoriteOffers()}>
              <div className="header__avatar-wrapper user__avatar-wrapper">
              </div>
              <span className="header__login">{(authorizationStatus === AuthorizationStatus.AUTH) ? name : `Sign in`}</span>
            </Link>

          </li>
        </ul>
      </nav>
    </Router>

  );
};

UserBlock.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  name: PropTypes.string,
  loadFavoriteOffers: PropTypes.func.isRequired
};

export default UserBlock;
