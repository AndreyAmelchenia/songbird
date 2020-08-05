import React from 'react';
import {
  Col, Image,
} from 'react-bootstrap';
import AudioPlayer from 'react-h5-audio-player';

const Card = () => (
  <>
    <Col className="col-md-5 align-self-center">
      <Image src="../../assets/img/sample.jpg" fluid thumbnail />
    </Col>
    <Col className="col-md-7 col-12 align-self-center">
      <h1>Name</h1>
      <hr />
      <AudioPlayer
        showJumpControls={false}
        layout="horizontal-reverse"
        src="../../assets/sound/Aria.mp3"
      />
    </Col>
  </>
);
export default Card;
