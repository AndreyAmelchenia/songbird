import React from 'react';
import {
  Form,
} from 'react-bootstrap';
import PropTypes from 'prop-types';

const Answer = ({ type }) => (
  <Form.Check
    checked
    disabled
    className="answer_check answer_check_true"
    type="radio"
    label={type}
    id={type}
  />
);
Answer.propTypes = {
  type: PropTypes.string.isRequired,
};
export default Answer;
