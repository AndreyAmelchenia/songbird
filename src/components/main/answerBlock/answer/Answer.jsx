import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { setVisibilityBird } from '../../../../actions/index';

const Answer = ({ bird }) => {
  const dispatch = useDispatch();
  const trueAnswer = useSelector((state) => state.answers).filter((e) => e.answer);
  return (
    <Form.Check
      onClick={() => {
        dispatch(setVisibilityBird(bird));
      }}
      className={trueAnswer[0].name === bird.name ? 'answer_check answer_check_true' : 'answer_check'}
      type="radio"
      label={bird.name}
      id={`${bird.id}-${bird.name}`}
    />
  );
};
Answer.propTypes = {
  bird: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
export default Answer;
