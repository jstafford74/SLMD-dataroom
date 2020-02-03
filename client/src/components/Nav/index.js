import React from "react";
import { connect } from 'react-redux'
import { Button, Navbar ,Nav} from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./style.css";
import { onLogout } from '../../redux/actions'

var Navstyle = {
  main: {
    zIndex: 1,
    opacity: 1
  },
  font: {
    fontSize: 16,
    color: 'lightblue'
  }
}
const SLMDNav = (props) => (
  <Navbar fixed="top" bg="dark" variant="dark" style={Navstyle.main}>
    <Navbar.Brand to="/" style={Navstyle.font} >SLMD</Navbar.Brand>
    {
      props.user ?
        <Button onClick={props.onLogout}>Logout</Button> :
        <Link to={"/login"}>
          <Button>Login</Button>
        </Link>
    }

    <Nav className="mr-auto">
      <Nav.Link to="/" style={Navstyle.font}><strong>Home</strong></Nav.Link>
      <Nav.Link to="/dataroom" style={Navstyle.font}>Dataroom</Nav.Link>

    </Nav>
  </Navbar>
);


export default connect(
  // mapStateToProps
  state => ({user: state.user.details}),
  // mapDispatchToProps
  { onLogout }
)(SLMDNav);

