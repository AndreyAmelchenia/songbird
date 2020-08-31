import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  setDisableLink, setNewGame, setDisableButton, setVisibilityNone,
} from '../../actions/index';
import { fetchBirds } from '../../reducers/soundBirds';

const Link = ({ name }) => {
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
          href={`#${name.url}`}
          onClick={() => {
            dispatch(setDisableLink(true));
            dispatch(fetchBirds(name.url));
            dispatch(setNewGame());
            dispatch(setDisableButton(true));
            dispatch(setVisibilityNone());
          }}
          to={{ pathname: `/${name.url}`, state: { question: 0, score: 0 } }}
        >
          {name.name}
        </Nav.Link>
      )}
    </>

  );
};

Link.propTypes = {
  name: PropTypes.PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};
export default Link;
