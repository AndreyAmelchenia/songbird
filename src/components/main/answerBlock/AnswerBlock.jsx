import React from 'react';
import { Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import Answer from './answer/Answer';
import {
  setDisableButton, setDisableLink, setVisibilityNone, resetAnswerBlock, resetSoundBirds,
} from '../../../actions';

const AnswerBlock = ({ birds }) => {
  const { soundBirds, score } = useSelector((state) => ({
    soundBirds: state.soundBirds,
    score: state.score.score,
  }));

  const history = useHistory();
  const { question } = useLocation().state;
  const dispatch = useDispatch();
  return (
    <Form
      id="form"
      onSubmit={(e) => {
        if (question === soundBirds.length - 1) {
          history.push('/finish', { score });
          dispatch(setDisableLink(false));
          dispatch(resetAnswerBlock());
          dispatch(resetSoundBirds());
        } else {
          history.push(`${history.location.pathname}`, { question: question + 1, score });
          dispatch(setDisableButton(true));
          dispatch(setVisibilityNone());
        }
        e.preventDefault();
      }}
    >
      {birds.map((bird) => (
        <Answer key={bird.name} bird={bird} />
      ))}
    </Form>
  );
};
AnswerBlock.propTypes = {
  birds: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default AnswerBlock;
