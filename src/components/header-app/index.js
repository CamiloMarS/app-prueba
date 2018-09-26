import React, { Component } from "react";
import "./header-app.css";
class HeaderApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-header">
        <div>
          <a href="/">
            <img
              src="https://sngular.team/wp-content/uploads/2017/04/logo-header-sngular-web.png"
              alt="imagen"
              className="app-header-image"
            />
          </a>
        </div>
        <p className="header-title-app">Administración</p>
      </div>
    );
  }
} //end  class LoginApp

export default HeaderApp;
