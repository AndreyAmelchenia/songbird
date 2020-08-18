import React from 'react';
import { Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import Answer from './answer/Answer';
import {
  setTrueAnswer, setDisableButton, setDisableLink, setVisibilityNone,
} from '../../../actions';

const AnswerBlock = ({ birds }) => {
  const { answers, score } = useSelector((state) => ({
    answers: state.answers,
    score: state.score.score,
  }));

  const history = useHistory();
  const { question } = useLocation().state;
  const dispatch = useDispatch();
  return (
    <Form
      id="form"
      onSubmit={(e) => {
        if (question === answers.length - 1) {
          history.push('/finish', { score });
          dispatch(setDisableLink(false));
        } else {
          history.push(`${history.location.pathname}`, { question: question + 1, score });
          dispatch(setTrueAnswer(question + 1));
          dispatch(setDisableButton(true));
          dispatch(setVisibilityNone());
        }
        e.preventDefault();
      }}
    >
      {console.log('question', history.location.state)}
      {birds.map((bird) => (
        <Answer key={`${bird.id}-${bird.name}`} bird={bird} />
      ))}
    </Form>
  );
};
AnswerBlock.propTypes = {
  birds: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
};

export default AnswerBlock;
