import React, { Component } from "react";
import "./header-app.css";
import logo_sngular from "../../images/logo-sngular.png";

class HeaderApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let datosProfile = this.props.profileObj;

    return (
      <div className="app-header">
        <div>
          <a href="/">
            <img
              src={logo_sngular}
              alt="logo-sngular"
              className="app-header-image"
            />
          </a>
        </div>
        <div className="data-user-content">
          <span className="user-name">{datosProfile.name}</span>
          <img className="user-img" src={datosProfile.imageUrl} />
        </div>
      </div>
    );
  }
} //end  class LoginApp

export default HeaderApp;
