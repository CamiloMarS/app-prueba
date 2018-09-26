import React, { Component } from "react";
import "./App.css";

/**================ Mis Componentes =================**/
import HeaderApp from "./components/header-app";
//import FooterApp from "./components/footer-app";
import LoginGoogle from "./components/login-google";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="content-main">
          <HeaderApp />
          <LoginGoogle />
        </div>
      </div>
    );
  }
}

export default App;
