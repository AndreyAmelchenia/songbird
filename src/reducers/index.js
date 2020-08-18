import { combineReducers } from 'redux';
import disableLink from './disableLink';
import visibilityBird from './visibilityBird';
import answers from './answers';
import disableButton from './disableButton';
import score from './score';

const rootReducer = combineReducers({
  answers,
  visibilityBird,
  disableLink,
  disableButton,
  score,
});

export default rootReducer;
