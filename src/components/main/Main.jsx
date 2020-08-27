import React, { useEffect } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import Card from './card/Card';
import AnswerBlock from './answerBlock/AnswerBlock';
import AnswerCard from './answerBlock/answerCard/AnswerCard';
import { fetchAnswerBlock } from '../../reducers/answersBlock';

const Main = () => {
  const dispatch = useDispatch();
  const list = async (arr, cnt) => dispatch(fetchAnswerBlock(arr, cnt));
  const { question } = useLocation().state;
  const { url } = useParams();
  const { answers, soundBirds, disableButton } = useSelector((state) => state);
  useEffect(() => {
    if (question === 0 && soundBirds.length !== 0) {
      list(soundBirds[question], url);
      list(soundBirds[question + 1], url);
    } else if (question !== 0) {
      list(soundBirds[question], url);
    }
  }, [soundBirds]);
  useEffect(() => {
    if (question !== 0 && soundBirds.length > question + 1) {
      list(soundBirds[question + 1], url);
    }
  }, [question]);

  if (answers.length === 0 || !answers[question]) {
    return <div>Null</div>;
  }
  return (
    <>
      <Row>
        <Card />
      </Row>
      <Row>
        <Col className="col-md-5 col-12">
          <AnswerBlock birds={answers[question]} />
        </Col>
        <Col>
          <AnswerCard />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            disabled={disableButton}
            form="form"
            type="submit"
            variant="outline-secondary"
            className="w-100 mb-2"
          >
            Next
          </Button>
        </Col>
      </Row>
    </>
  );
};
export default Main;
