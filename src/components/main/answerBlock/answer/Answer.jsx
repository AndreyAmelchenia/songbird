import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ReactAudioPlayer from 'react-audio-player';
import {
  setVisibilityBird, setDisableButton, setScore, setScoreQuestion,
} from '../../../../actions/index';

const Answer = ({ bird }) => {
  const dispatch = useDispatch();
  const disableButton = useSelector((state) => state.disableButton);
  const correct = useRef(null);
  const error = useRef(null);
  return (
    <>
      <Form.Check
        disabled={!disableButton}
        onChange={() => {
          if (bird.answer) {
            dispatch(setScore());
            correct.current.audioEl.current.play();
          } else {
            dispatch(setScoreQuestion());
            error.current.audioEl.current.play();
          }
        }}
        onClick={() => {
          if (bird.answer) {
            dispatch(setDisableButton(false));
          }
          dispatch(setVisibilityBird(bird));
        }}
        className={bird.answer ? 'answer_check answer_check_true' : 'answer_check'}
        type="radio"
        label={bird.name}
        id={bird.name}
      />
      <ReactAudioPlayer ref={correct} src="./assets/audio/correct.mp3" />
      <ReactAudioPlayer ref={error} src="./assets/audio/error.mp3" />
    </>
  );
};
Answer.propTypes = {
  bird: PropTypes.shape({
    name: PropTypes.string.isRequired,
    answer: PropTypes.bool.isRequired,
  }).isRequired,
};
export default Answer;
