import React from 'react';
import {
  Col, Image, Row,
} from 'react-bootstrap';
import AudioPlayer from 'react-h5-audio-player';

const AnswerCard = () => (
  <>
    <Row>
      <Col className="align-self-center">
        <Image src="../../assets/img/sample.jpg" fluid thumbnail />
      </Col>
      <Col className="align-self-center">
        <hr />
        <h3>Name</h3>
        <hr />
        <h5>NameLATIN</h5>
        <hr />
      </Col>
    </Row>
    <Row className="mb-2 mt-2">
      <Col>
        <AudioPlayer
          showJumpControls={false}
          layout="horizontal-reverse"
          src="../../assets/sound/Aria.mp3"
        />
      </Col>
    </Row>
    <Row>
      <Col>
        <p>
          LKMKM KDMFVK KDFMVK kmsdc pkkdvppkm dffpvp dfvpkk pkmdfvppkkm pdfvpm mdffpkkmm
        </p>
      </Col>
    </Row>
  </>
);
export default AnswerCard;
