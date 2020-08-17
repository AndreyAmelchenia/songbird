import React from 'react';
import { Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Answer from './answer/Answer';
import { setTrueAnswer } from '../../../actions';

const AnswerBlock = ({ birds }) => {
  const answers = useSelector((state) => state.answers);
  const history = useHistory();
  const dispatch = useDispatch();
  const nextId = (arr) => {
    let id;
    arr.forEach((e, index) => {
      if (e.answer) {
        id = index;
      }
    });
    return id + 1;
  };
  return (
    <Form
      id="form"
      onSubmit={(e) => {
        if (nextId(answers) === answers.length) {
          history.push('/finish', { score: 123 });
        } else {
          history.push(`${history.location.pathname}`, { question: nextId(answers) });
          dispatch(setTrueAnswer(nextId(answers)));
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
