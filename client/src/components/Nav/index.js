import React from "react";
import { Nav, Button, Navbar } from 'react-bootstrap';
import "./style.css";
import { isLoggedIn, logOut } from '../../utils/Authentication'

var Navstyle = {
  main: {
    zIndex: 1,
    opacity:1
  }
}
const SLMDNav = () => (
  <Navbar fixed="top" bg="primary" variant="dark" style={Navstyle.main}>
    <Navbar.Brand href="#home" >SLMD</Navbar.Brand>

    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Dataroom</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
    </Nav>
  </Navbar>
);


export default SLMDNav;
