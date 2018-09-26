import React, { Component } from "react";
import "./login-google.css";

class LoginGoogle extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log("Si se insertará!");
  }
  render() {
    return (
      <div className="ui-login">
        <div className="ui-content-button-login">
          <div className="sngular-logo">
            <img
              src="https://sngular.team/wp-content/uploads/2017/04/logo-header-sngular-web.png"
              alt="sngular"
              className="logo-login-sngular"
            />
          </div>
          <div className="sngular-title-button-container">
            <p className="title-login">Administración</p>
            <button className="btn-login-google">Login</button>
          </div>
        </div>
      </div>
    );
  }
} //end class

export default LoginGoogle;
