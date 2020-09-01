import { combineReducers } from 'redux';
import disableLink from './disableLink';
import visibilityBird from './visibilityBird';
import disableButton from './disableButton';
import score from './score';
import { soundBirds } from './soundBirds';
import { answers } from './answersBlock';

const rootReducer = combineReducers({
  answers,
  visibilityBird,
  disableLink,
  disableButton,
  score,
  soundBirds,

});

export default rootReducer;
