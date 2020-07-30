import * as React from "react";
import HeaderBlock from "../header-block/header-block";
import ErrorBlock from "../error-block/error-block";
import {ErrorTypes} from "../../const";


interface Props {
  onAuthFormSubmit: ({login, password} : {login: string, password: string}) => {},
  error: string | number
};

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`
};

class LoginPage extends React.PureComponent<Props, {}> {
  private loginRef: React.RefObject<HTMLInputElement>;
  private passwordRef: React.RefObject<HTMLInputElement>;

  constructor(props) {
    super(props);

    this.loginRef = React.createRef();
    this.passwordRef = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    const {onAuthFormSubmit} = this.props;

    evt.preventDefault();

    onAuthFormSubmit({
      login: this.loginRef.current.value,
      password: this.passwordRef.current.value,
    });
  }

  render() {
    const {error} = this.props;

    return (
      <div className="page page--gray page--login">
        {<HeaderBlock
          authorizationStatus = {AuthorizationStatus.NO_AUTH}
          loadFavoriteOffers = {() => {}}
          name = {``}
        />}
        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form className="login__form form" action="#" method="post" onSubmit={this.handleSubmit}>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input className="login__input form__input" type="email" name="email" placeholder="Email" required={true} ref={this.loginRef}/>
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input className="login__input form__input" type="password" name="password" placeholder="Password" required={true} ref={this.passwordRef} />
                </div>
                <button className="login__submit form__submit button" type="submit">Sign in</button>
              </form>
              {error === ErrorTypes.BAD_REQUEST ?
                <ErrorBlock /> : ``}
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>Amsterdam</span>
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
}


export default LoginPage;
