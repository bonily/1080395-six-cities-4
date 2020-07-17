import React from "react";
import PropTypes from "prop-types";

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`
};

const UserBlock = (props) => {
  const {authorizationStatus, name, onUserBlockClick} = props;
  console.log(name);
  console.log(authorizationStatus);

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <a className="header__nav-link header__nav-link--profile" href="#" onClick={() => onUserBlockClick(authorizationStatus === AuthorizationStatus.AUTH)}>
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__login">{(authorizationStatus === AuthorizationStatus.AUTH) ? name : `Sign in`}</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

UserBlock.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  name: PropTypes.string,
  onUserBlockClick: PropTypes.func.isRequired
};

export default UserBlock;
