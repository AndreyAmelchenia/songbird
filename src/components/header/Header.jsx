import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LinkNav from './Link';
import { URL } from '../../constants/Url';
import { fetchSound } from '../../reducers/soundBirds';

const Header = () => {
  const { score } = useSelector((state) => state.score);
  const dispatch = useDispatch();
  return (
    <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg" sticky="top">
      <Navbar.Toggle className="col-auto order-0" aria-controls="basic-navbar-nav" />
      <Navbar.Text className="col-lg-6 col-auto order-2 text-right">
        {` SCORE: ${score}`}
      </Navbar.Text>
      <Navbar.Brand
        as={NavLink}
        onClick={() => dispatch(fetchSound())}
        href="#home"
        exact
        to="/"
      >
        HOME

      </Navbar.Brand>
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
