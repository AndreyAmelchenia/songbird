import React from 'react';
import {
  Form,
} from 'react-bootstrap';
import Answer from './answer/Answer';

const arr = ['lion', 'fox', 'frog', 'mouse', 'cat', 'dog'];

const AnswerBlock = () => (
  <Form>
    {arr.map((variant) => (
      <Answer key={variant} type={variant} />
    ))}

  </Form>
);
export default AnswerBlock;
