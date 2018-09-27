import React, { Component } from "react";
import "./circular-button.css";

class CircularButton extends Component {
  buttonCircleAction = () => {
    console.log("ButtonActive");
    this.props.actionCircleButton({
      status: 200,
      message: "Button Circle Clicked"
    });
  };

  render() {
    return (
      <button className="button-circle" onClick={this.buttonCircleAction}>
        {this.props.textButton}
      </button>
    );
  }
}

export default CircularButton;
