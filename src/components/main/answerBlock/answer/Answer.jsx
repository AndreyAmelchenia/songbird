import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import {
  setVisibilityBird, setDisableButton, setScore, setScoreQuestion,
} from '../../../../actions/index';

const Answer = ({ bird }) => {
  const dispatch = useDispatch();
  const disableButton = useSelector((state) => state.disableButton);
  return (
    <Form.Check
      disabled={!disableButton}
      onClick={() => {
        if (bird.answer) {
          dispatch(setDisableButton(false));
          dispatch(setScore());
        } else {
          dispatch(setScoreQuestion());
        }
        dispatch(setVisibilityBird(bird));
      }}
      className={bird.answer ? 'answer_check answer_check_true' : 'answer_check'}
      type="radio"
      label={bird.name}
      id={bird.name}
    />
  );
};
Answer.propTypes = {
  bird: PropTypes.shape({
    name: PropTypes.string.isRequired,
    answer: PropTypes.bool.isRequired,
  }).isRequired,

};
export default Answer;
