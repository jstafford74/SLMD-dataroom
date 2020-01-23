import React from "react";
import { Nav,  Navbar } from 'react-bootstrap';
import "./style.css";
// import { isLoggedIn, logOut } from '../../utils/Authentication'

var Navstyle = {
  main: {
    zIndex: 1,
    opacity:1
  },
  font:{
    fontSize:16,
    color:'lightblue'
  }
}
const SLMDNav = () => (
  <Navbar fixed="top" bg="dark" variant="dark" style={Navstyle.main}>
    <Navbar.Brand href="#home" style={Navstyle.font} >SLMD</Navbar.Brand>

    <Nav className="mr-auto">
      <Nav.Link href="/" style={Navstyle.font}><strong>Home</strong></Nav.Link>
      <Nav.Link href="/dataroom" style={Navstyle.font}>Dataroom</Nav.Link>
      
    </Nav>
  </Navbar>
);


export default SLMDNav;
