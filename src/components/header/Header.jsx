import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LinkNav from './Link';
import { URL } from '../../constants/Url';

const Header = () => {
  const { score } = useSelector((state) => state.score);
  return (
    <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg" sticky="top">
      <Navbar.Toggle className="col-auto order-0" aria-controls="basic-navbar-nav" />
      <Navbar.Text className="col-lg-6 col-auto order-2 text-right">
        {` SCORE: ${score}`}
      </Navbar.Text>
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
};

export default Header;
