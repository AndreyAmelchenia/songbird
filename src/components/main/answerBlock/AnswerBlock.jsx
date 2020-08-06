import React from 'react';
import {
  Form,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import Answer from './answer/Answer';

// const arr = ['lion', 'fox', 'frog', 'mouse', 'cat', 'dog'];

const AnswerBlock = ({ birds }) => (
  <Form>
    {birds.map(({ id, name }) => (
      <Answer key={id} type={name} />
    ))}

  </Form>
);

AnswerBlock.propTypes = {
  birds: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired).isRequired,

};
export default AnswerBlock;
