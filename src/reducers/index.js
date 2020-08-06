import { combineReducers } from 'redux';
import birds from './listBirds';

const rootReducer = combineReducers({
  birds,
});

export default rootReducer;
