import React, { useEffect } from 'react';
import {
  Container, Row, Col, Button, Spinner,
} from 'react-bootstrap';
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
    return <Row className="justify-content-center"><Spinner animation="grow" variant="danger" /></Row>;
  }
  return (
    <Container>
      <Row>
        <Card />
      </Row>
      <Row>
        <Col className="col-md-7 col-12 order-md-1">
          <AnswerCard />
        </Col>
        <Col className="col-md-5 col order-md-0 p-2">
          <AnswerBlock birds={answers[question]} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            disabled={disableButton}
            form="form"
            type="submit"
            variant="danger"
            className="w-100 mb-2 main_button"
          >
            Next
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
export default Main;
