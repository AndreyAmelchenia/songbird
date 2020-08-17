import * as types from '../constants/ActionTypes';

// export const completeBirds = (answers) => ({ type: types.COMPLETE_BIRDS, answers });
export const setVisibilityBird = (bird) => ({ type: types.SET_VISIBILITY_BIRD, bird });
export const setAnswer = (id) => ({ type: types.SET_ANSWER, id });
export const setTrueAnswer = (id) => ({ type: types.SET_TRUE_ANSWER, id });
