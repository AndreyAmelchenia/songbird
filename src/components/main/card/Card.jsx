import React, { useEffect, useRef } from 'react';
import { Col, Image, Button } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import AudioPlayer from 'react-h5-audio-player';
import { useSelector, useDispatch } from 'react-redux';
import { setDisableLink, setNewGame, resetAnswerBlock } from '../../../actions';

const Card = () => {
  const dispatch = useDispatch();
  const player = useRef(null);
  const { question } = useLocation().state;
  const answer = useSelector((state) => state.answers[question].find((e) => e.answer));
  const visibleAnswer = useSelector((state) => state.disableButton);
  useEffect(() => (!visibleAnswer
    ? player.current.audio.current.pause() : undefined), [visibleAnswer]);
  return (
    <>
      <Col className="col-md-5 my_card p-2">
        <Image
          src={visibleAnswer ? '../../assets/img/hotpng.png' : answer.image}
          fluid
          thumbnail
        />
      </Col>
      <Col className="col-md-7 col-12 my_card_answer p-2">
        <Button
          variant="danger"
          as={NavLink}
          to="/"
          onClick={() => {
            dispatch(setDisableLink(false));
            dispatch(setNewGame());
            dispatch(resetAnswerBlock());
          }}
        >
          Закончит игру
        </Button>
        <h1>{visibleAnswer ? '*****' : answer.name}</h1>
        <AudioPlayer
          ref={player}
          className="my_card_player"
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
