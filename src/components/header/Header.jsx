import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import LinkNav from './Link';
import {
  URL,
} from '../../constants/Url';

const Header = () => (
  <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg" sticky="top">
    <Navbar.Toggle className="col-auto order-0" aria-controls="basic-navbar-nav" />
    <Navbar.Text className="col-lg-6 col-auto order-2 text-right">SCORE: 0</Navbar.Text>
    <Navbar.Brand as={NavLink} href="#home" exact to="/">HOME</Navbar.Brand>
    <Navbar.Collapse className="order-3 justify-content-end" id="basic-navbar-nav">
      <Nav>
        {URL
          .map((element, index) => (
            <LinkNav key={element} name={element} id={index} />
          ))}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
