import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Card from './card/Card';
import AnswerBlock from './answerBlock/AnswerBlock';
import AnswerCard from './answerBlock/answerCard/AnswerCard';
import birdsArr from '../../selectors/listBirds';
// import birdsData from '../../constants/birdsData';

// const birdsDefault = birdsData.filter((elem) => elem.id === 1);
const Main = () => {
  const birds = useSelector(birdsArr);
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
          <Button form="form" type="submit" variant="outline-secondary" className="w-100 mb-2">Next</Button>
        </Col>
      </Row>
    </>
  );
};
export default Main;
