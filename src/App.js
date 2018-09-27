import React, { Component } from "react";
import "./App.css";

/**================ Mis Componentes =================**/
import HeaderApp from "./components/header-app";
//import FooterApp from "./components/footer-app";
import LoginGoogle from "./components/login-google";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        userLogged: false,
        dataSession: null
      }
    };
  }

  componentWillMount() {
    let getDataIFExist =
      localStorage.getItem("sessionActive") !== null
        ? JSON.parse(localStorage.getItem("sessionActive"))
        : null;
    if (getDataIFExist !== null) {
      this.setState({
        user: {
          userLogged: getDataIFExist.logueado,
          dataSession: getDataIFExist.e
        }
      });
    }
  }

  listenerSessionStatus = data => {
    localStorage.setItem("sessionActive", JSON.stringify(data));
    this.setState({ user: { userLogged: data.logueado, dataSession: data.e } });
  };
  render() {
    let { user } = this.state;
    return (
      <div className="App">
        <div className="content-main">
          {user.userLogged ? (
            <HeaderApp profileObj={this.state.user.dataSession.profileObj} />
          ) : (
            <LoginGoogle loginStatus={this.listenerSessionStatus} />
          )}
        </div>
      </div>
    );
  }
}

export default App;

//Credencial de mi Api Google:
/**
 * Nombre: ApiDExcelGoogle
 * Credencial: AIzaSyAkJizmzTT9NQ_O3OqF7kbcLa2VGqcY3JI
 */

/**
 * Credenciales cliente OAth2
 * Client ID: 197814999214-bbkrtjkumrm9qlusudsuhgpahh6bjqkf.apps.googleusercontent.com
 * Secreto de cliente: 6M8XbBpmwpyE-oeexvw6oFQ2
 */
