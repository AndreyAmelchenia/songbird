import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import { setAnswer } from '../../actions/index';

const Link = ({ name, id }) => {
  const dispatch = useDispatch();
  return (
    <>
      {name === 'home' ? (
        <Nav.Link
          as={NavLink}
          href={`#${name}`}
          exact
          to="/"
        >
          {name}
        </Nav.Link>
      ) : (
        <Nav.Link
          as={NavLink}
          href={`#${name}`}
          onClick={() => {
            dispatch(setAnswer(id));
          }}
          to={`/${name}`}
        >
          {name}
        </Nav.Link>
      )}
    </>

  );
};

Link.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
export default Link;
