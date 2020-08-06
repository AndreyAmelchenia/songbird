import React from 'react';
import {
  Row, Col, Button,
} from 'react-bootstrap';
import Card from './card/Card';
import AnswerBlock from '../../containers/answerBlock';
import AnswerCard from './answerBlock/answerCard/AnswerCard';

const Main = () => (
  <>
    <Row>
      <Card />
    </Row>
    <Row>
      <Col className="col-md-5 col-12">
        <AnswerBlock />
      </Col>
      <Col>
        <AnswerCard />
      </Col>
    </Row>
    <Row>
      <Col>
        <Button variant="outline-secondary" disabled className="w-100 mb-2">Next</Button>
      </Col>
    </Row>
  </>
);
export default Main;
