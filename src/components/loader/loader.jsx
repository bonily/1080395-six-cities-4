import React from "react";

const Loader = () => {
  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active" onClick={() => {}}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
          </div>
        </div>
      </header>
      <div style={{width: `100%`, textAlign: `center`}}>
        <img src="img/loader.svg" alt="Loading" width="328" height="328"/>
      </div>
    </div>
  );
};

export default Loader;
