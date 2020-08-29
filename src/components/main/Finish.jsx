import React, { useRef, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import {
  Container, Row, Col, Button,
} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import ReactAudioPlayer from 'react-audio-player';
import {
  setDisableLink, setNewGame,
  setDisableButton, setVisibilityNone,
  resetSoundBirds, resetAnswerBlock,
} from '../../actions/index';
import { fetchBirds } from '../../reducers/soundBirds';

const Finish = () => {
  const dispatch = useDispatch();
  const { pathname, score } = useLocation().state;
  const history = useHistory();
  const failure = useRef(null);
  const success = useRef(null);
  const soundBirds = useSelector((state) => state.soundBirds);
  useEffect(() => {
    if (soundBirds.length * 10 !== score) {
      failure.current.audioEl.current.play();
    } else {
      success.current.audioEl.current.play();
    }
  },
  []);
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <h1 className="text-center">
            Молодец!!!
          </h1>
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
              dispatch(setDisableLink(true));
              dispatch(setNewGame());
              dispatch(setDisableButton(true));
              dispatch(setVisibilityNone());
              dispatch(resetSoundBirds());
              dispatch(resetAnswerBlock());
              dispatch(fetchBirds(pathname.slice(1)));
            }}
            variant="danger"
          >
            Повторить ещё раз
          </Button>
          )}
          <ReactAudioPlayer ref={failure} src="./assets/audio/failure.mp3" />
          <ReactAudioPlayer ref={success} src="./assets/audio/success.mp3" />
        </Col>
      </Row>
    </Container>
  );
};
export default Finish;
