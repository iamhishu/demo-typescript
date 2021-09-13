import React, { Component } from "react";
import Loader from "../Pokeloader/Pokeloader";
import "./Loader.css";

class ModalPage extends Component {
  render() {
    return (
      <div className="loader-wrapper">
        <Loader />
      </div>
    );
  }
}

export default ModalPage;
