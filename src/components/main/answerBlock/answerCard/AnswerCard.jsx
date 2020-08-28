import React, { useRef } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import AudioPlayer from 'react-h5-audio-player';
import { useSelector } from 'react-redux';

const AnswerCard = () => {
  const player = useRef();
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
              <h5
                onClickCapture={() => {
                  player.current.audio.current.play();
                  console.log(player);
                }}
              >
                {name}
              </h5>
              <hr />
              <p
                onClickCapture={() => player.current.audio.current.pause()}
              >
                {species}

              </p>
              <hr />
            </Col>
          </Row>
          <Row className="mb-2 mt-2">
            <Col>
              <AudioPlayer
                ref={player}
                autoPlayAfterSrcChange={false}
                className="my_card_player"
                controls
                showJumpControls={false}
                layout="horizontal-reverse"
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
