import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { setAnswer, setDisableLink } from '../../actions/index';

const Link = ({ name, id }) => {
  const dispatch = useDispatch();
  const disable = useSelector((state) => state.disableLink);
  return (
    <>
      {name === 'home' ? (
        <Nav.Link
          disabled={disable}
          as={NavLink}
          href={`#${name}`}
          exact
          to={{ pathname: '/', state: { question: 0, score: 0 } }}
        >
          {name}
        </Nav.Link>
      ) : (
        <Nav.Link
          disabled={disable}
          as={NavLink}
          href={`#${name}`}
          onClick={() => {
            dispatch(setAnswer(id));
            dispatch(setDisableLink(true));
          }}
          to={{ pathname: `/${name}`, state: { question: 0, score: 0 } }}
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
