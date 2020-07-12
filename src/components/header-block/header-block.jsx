import React from "react";
import PropTypes from "prop-types";
import UserBlock from "../user-block/user-block.jsx";

// TODO create onLogoClick handler

const HeaderBlock = (props) => {
  const {isLoginComplete, name, onUserBlockClick} = props;
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link header__logo-link--active" onClick={() => {}}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </a>
          </div>
          {<UserBlock
            isLoginComplete = {isLoginComplete}
            name = {name}
            onUserBlockClick = {onUserBlockClick}
          />}
        </div>
      </div>
    </header>
  );
};

HeaderBlock.propTypes = {
  isLoginComplete: PropTypes.bool.isRequired,
  name: PropTypes.string,
  onUserBlockClick: PropTypes.func.isRequired
};

export default React.memo(HeaderBlock);
