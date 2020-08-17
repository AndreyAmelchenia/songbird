import { combineReducers } from 'redux';
// import birds from '../selectors/listBirds';
import visibilityBird from './visibilityBird';
import answers from './answers';

const rootReducer = combineReducers({
  answers,
  // birds,
  visibilityBird,
});

export default rootReducer;
