import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import {
  Container, Row, Col, Button,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Finish = () => {
  const { pathname, score } = useLocation().state;
  const history = useHistory();
  const soundBirds = useSelector((state) => state.soundBirds);
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <h1 className="text-center">
            Молодца это конец!!!
          </h1>
          {console.log(pathname)}
          <h3 className="text-center">
            Ты набрал(а)
            {' '}
            {score}
            {' '}
            из
            {' '}
            {soundBirds.length * 10}
            .
          </h3>
          {soundBirds.length * 10 !== score
          && (
          <Button
            onClick={() => {
              history.push(pathname, { question: 0, score: 0 });
            }}
            variant="danger"
          >
            Повторить ещё раз
          </Button>
          )}

        </Col>
      </Row>
    </Container>
  );
};
export default Finish;
