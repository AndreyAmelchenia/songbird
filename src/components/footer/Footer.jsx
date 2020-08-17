import React from 'react';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Footer = () => (
  <Navbar className="justify-content-center" collapseOnSelect bg="dark" variant="dark" expand="lg" sticky="bottom">
    <Navbar.Brand as={NavLink} href="#home" to="/">HOME</Navbar.Brand>
  </Navbar>
);
export default Footer;
