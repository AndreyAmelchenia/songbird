import React from 'react';
import {
  Navbar, Nav,
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg" sticky="top">
    <Navbar.Toggle className="col-auto order-0" aria-controls="basic-navbar-nav" />
    <Navbar.Text className="col-lg-6 col-auto order-2 text-right">SCORE: 0</Navbar.Text>
    <Navbar.Brand className="col-lg-6 col-3 order-1" as={NavLink} to="/" href="#home">LOGO</Navbar.Brand>
    <Navbar.Collapse className="order-3 justify-content-end" id="basic-navbar-nav">
      <Nav>
        <Nav.Link as={NavLink} href="#home" exact to="/">Home</Nav.Link>
        <Nav.Link as={NavLink} href="#game" to="/game">game</Nav.Link>
        <Nav.Link as={NavLink} href="#contacts" to="/contacts">contacts</Nav.Link>
        <Nav.Link as={NavLink} href="#game" to="/game">game</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
