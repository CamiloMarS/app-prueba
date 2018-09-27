import React, { Component } from "react";
import HeaderApp from "../header-app";
import "./main-app.css";
/**
 * Material UI Components
 */
// import { withStyles } from "@material-ui/core/styles";
//import Drawer from "@material-ui/core/Drawer";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import List from "@material-ui/core/List";
// import Typography from "@material-ui/core/Typography";
// import Divider from "@material-ui/core/Divider";
// import { Hidden } from "@material-ui/core";
import CircularButton from "../circular-button";

class MainApp extends Component {
  render() {
    let datauser = this.props.data.dataSession;

    return (
      <div className="container-app">
        <HeaderApp profileObj={datauser.profileObj} />

        <div className="content-body">
          <div className="content-body-left">
            <p>Left</p>
          </div>
          <div className="content-body-right">
            <p>Right</p>
          </div>
        </div>
      </div>
    );
  }
} //End class

export default MainApp;
