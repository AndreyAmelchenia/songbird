import React from 'react';
import { Col, Image, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import AudioPlayer from 'react-h5-audio-player';
import { useSelector, useDispatch } from 'react-redux';
import { setDisableLink, setNewGame } from '../../../actions';

const Card = () => {
  const dispatch = useDispatch();
  const { question } = useLocation().state;
  const answer = useSelector((state) => state.answers[question].find((e) => e.answer));
  const visibleAnswer = useSelector((state) => state.disableButton);
  return (
    <>
      <Col className="col-md-5 align-self-center">
        {console.log(answer)}
        <Image
          src={visibleAnswer ? '../../assets/img/hotpng.png' : answer.image}
          fluid
          thumbnail
        />
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
        <h1>{visibleAnswer ? '*****' : answer.name}</h1>
        <hr />
        <AudioPlayer
          autoPlay
          showJumpControls={false}
          layout="horizontal-reverse"
          src={answer.audio}
        />
      </Col>
    </>
  );
};
export default Card;
