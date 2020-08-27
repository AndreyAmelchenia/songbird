import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

const Home = () => (
  <Container>
    <Row>
      <Col><h1 className="text-center">Добро пожаловать!!!</h1></Col>
    </Row>
    <Row>
      <Col>
        <h3 className="text-center">
          В этом приложении представлена
          викторина в которой вам необходимо угадать птицу по ее голосу.
          <br />
          Птицы представлены по странам проживания.
          <br />
          Выберите страну и угадайте что за птица спрятана.
        </h3>
        <p className="text-center">
          P.S. извиняюсь за некоторые ошибки с картинками
          они не всегда совпадают с указанной птицей
        </p>
      </Col>
    </Row>
  </Container>
);
export default Home;
