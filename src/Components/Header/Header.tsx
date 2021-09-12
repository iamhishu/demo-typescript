import React from 'react';
import {

  NavLink
  } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import "./Header.css";

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: '#fff'
};



function Header (){
return(
<Navbar collapseOnSelect expand="lg" sticky="top"  variant="dark">
  <Container>
  <Navbar.Brand href="#home"><span className="pksymbol-wrappern">Pokedex<i className="pksymbol pksymbol-pokeball-logo"></i></span></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-avbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
   <NavLink exact to="/" style={linkStyle} activeClassName="active" >Home</NavLink>
      <NavLink to="/allPokemon" style={linkStyle} activeClassName="active" >All Pokemon</NavLink>
         <NavLink to="/myPokemon"  style={linkStyle} activeClassName="active"> My Pokemon</NavLink>
          <NavLink to="/searchPokemon"  style={linkStyle} activeClassName="active">Search Pokemon</NavLink>
    </Nav>
    <Nav>
    <Nav.Link href="#aboutme">About Me</Nav.Link>
      <Nav.Link eventKey={2} href="https://www.instagram.com/its_hishu/">
        @Follow me
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
);

}

export default Header;