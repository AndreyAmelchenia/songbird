import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import AudioPlayer from 'react-h5-audio-player';
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
            <Col className="align-self-center">
              <Image src={image} fluid thumbnail />
            </Col>
            <Col className="align-self-center">
              <hr />
              <h3>{name}</h3>
              <hr />
              <h5>{species}</h5>
              <hr />
            </Col>
          </Row>
          <Row className="mb-2 mt-2">
            <Col>
              <AudioPlayer
                showJumpControls={false}
                layout="horizontal-reverse"
                src={audio}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                {description}
              </p>
            </Col>
          </Row>
        </>
      ) : <div>No</div>}

    </>
  );
};
export default AnswerCard;
