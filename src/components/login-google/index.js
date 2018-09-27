import React, { Component } from "react";
import "./login-google.css";
import GoogleLogin from "react-google-login";
import logo_sngular from "../../images/logo-sngular.png";

class LoginGoogle extends Component {
  constructor(props) {
    super(props);
  }

  loginWithGoogle = e => {
    this.props.loginStatus({
      logueado: true,
      e
    });
  };
  render() {
    return (
      <div className="ui-login">
        <div className="ui-content-button-login">
          <div className="sngular-logo">
            <img
              src={logo_sngular}
              alt="sngular"
              className="logo-login-sngular"
            />
          </div>
          <div className="sngular-title-button-container">
            <p className="title-login">Administración</p>
            <GoogleLogin
              clientId={
                "197814999214-bbkrtjkumrm9qlusudsuhgpahh6bjqkf.apps.googleusercontent.com"
              }
              buttonText="Acceder"
              className="btn-login-google"
              onSuccess={this.loginWithGoogle}
            />
          </div>
        </div>
      </div>
    );
  }
} //end class

export default LoginGoogle;
