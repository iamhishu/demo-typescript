import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import Loader from "../Pokeloader/Pokeloader";
import "./Loader.css";

class ModalPage extends Component {


render() {
  return (
<div className="loader-wrapper">

<Loader />


{/* <!--   <div class="loader">
    <div class="roller"></div>
    <div class="roller"></div>
  </div> -->
<!--   <div class="loader loader-2">
    <div class="roller"></div>
    <div class="roller"></div>
  </div> -->
<!--   <div class="loader loader-3">
    <div class="roller"></div>
    <div class="roller"></div>
  </div> --> */}
</div>
    );
  }
}

export default ModalPage;