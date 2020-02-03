import React from "react";
import { connect } from 'react-redux'
import { Button, Navbar, Nav } from 'react-bootstrap';
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
  },
  navitem: {
    width: 20,
    marginLeft: 5,
    marginRight: 5
  }
}
const SLMDNav = (props) => (
  <Navbar fixed="top" bg="primary" variant="dark" hover collapseOnSelect expand='lg'>
    <Navbar.Brand to="/"  >SLMD</Navbar.Brand>
    <Navbar.Toggle aria-controls='respnav' />
    {/* <Col lg={{ span: 6, offset: 2 }} > */}
    <Navbar.Collapse id='respnav' className='justify-content-end'  >
      <Nav variant="pills" defaultActiveKey="/">

        <Nav.Item>
          <Link to="/" style={Navstyle.font}><strong>Home</strong></Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/login" style={Navstyle.font}>Dataroom</Link>
        </Nav.Item>

        {
          props.user ?
            <Nav.Item>
              <Button onClick={props.onLogout}>Logout</Button></Nav.Item> :
            <Nav.Item>
              <Link to={"/login"}>
                <Button>Login</Button>
              </Link>
            </Nav.Item>

        }

      </Nav>
    </Navbar.Collapse>
  </Navbar>
);


export default connect(
  // mapStateToProps
  state => ({ user: state.user.details }),
  // mapDispatchToProps
  { onLogout }
)(SLMDNav);

