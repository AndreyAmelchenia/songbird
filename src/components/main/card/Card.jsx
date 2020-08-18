import React from 'react';
import {
  Col, Image, Button,
} from 'react-bootstrap';
import AudioPlayer from 'react-h5-audio-player';
import { useDispatch } from 'react-redux';
import { setDisableLink, setNewGame } from '../../../actions';

const Card = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Col className="col-md-5 align-self-center">
        <Image src="../../assets/img/sample.jpg" fluid thumbnail />
      </Col>
      <Col className="col-md-7 col-12 align-self-center">
        <Button
          onClick={() => {
            dispatch(setDisableLink(false));
            dispatch(setNewGame());
          }}
        >
          Закончит игру
        </Button>
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
};
export default Card;
