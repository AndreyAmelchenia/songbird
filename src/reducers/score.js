import {
  SET_SCORE, SET_SCORE_QUESTION, SET_NEW_GAME,
} from '../constants/ActionTypes';

const score = window.history.state !== null
&& window.history.state.state !== null && window.history.state.state.score;
const defaultScore = score ? { score, scoreQuestion: 10 } : { score: 0, scoreQuestion: 10 };

const setScore = (state = defaultScore, { type }) => {
  switch (type) {
    case SET_SCORE:
      return {
        ...state,
        score: state.score + state.scoreQuestion,
        scoreQuestion: 10,
      };
    case SET_SCORE_QUESTION:
      return {
        ...state,
        scoreQuestion: state.scoreQuestion - 2,
      };
    case SET_NEW_GAME:
      return { score: 0, scoreQuestion: 10 };
    default:
      return state;
  }
};

export default setScore;
