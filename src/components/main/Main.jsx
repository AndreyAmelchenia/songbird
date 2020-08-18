import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Card from './card/Card';
import AnswerBlock from './answerBlock/AnswerBlock';
import AnswerCard from './answerBlock/answerCard/AnswerCard';
import birdsArr from '../../selectors/listBirds';

const Main = () => {
  const birds = useSelector(birdsArr);
  const disableButton = useSelector((state) => state.disableButton);
  return (
    <>
      <Row>
        <Card />
      </Row>
      <Row>
        <Col className="col-md-5 col-12">
          <AnswerBlock birds={birds} />
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
