import React from "react";
import PropTypes from "prop-types";

const UserBlock = (props) => {
  const {isLoginComplete, name, onUserBlockClick} = props;
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <a className="header__nav-link header__nav-link--profile" href="#" onClick={() => onUserBlockClick(isLoginComplete)}>
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__login">{isLoginComplete ? name : `Sign in`}</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

UserBlock.propTypes = {
  isLoginComplete: PropTypes.bool.isRequired,
  name: PropTypes.string,
  onUserBlockClick: PropTypes.func.isRequired
};

export default UserBlock;
