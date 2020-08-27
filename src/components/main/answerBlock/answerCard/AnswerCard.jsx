import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import ReactAudioPlayer from 'react-audio-player';
import { useSelector } from 'react-redux';

const AnswerCard = () => {
  const {
    name, species, image, audio, description,
  } = useSelector((state) => state.visibilityBird);
  return (
    <>
      {name ? (
        <>
          <Row>
            <Col className="align-self-center my_answerCard">
              <Image src={image} fluid thumbnail />
            </Col>
            <Col className="align-self-center">
              <hr />
              <h5>{name}</h5>
              <hr />
              <p>{species}</p>
              <hr />
            </Col>
          </Row>
          <Row className="mb-2 mt-2">
            <Col>
              <ReactAudioPlayer
                // className="my_card_player"
                controls
                // showJumpControls={false}
                // layout="horizontal-reverse"
                src={audio}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Здесь можно подробнее узнать о данной птицы из Wikipedia
                <a href={description} target="_blank" rel="noreferrer">
                  {' '}
                  {name}
                  {' '}
                </a>
              </p>

            </Col>
          </Row>
        </>
      ) : (
        <Row>
          <Col>
            <p>
              Место для информации о выбранной птицы
            </p>

          </Col>
        </Row>
      )}

    </>
  );
};
export default AnswerCard;
