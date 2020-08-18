import * as types from '../constants/ActionTypes';

export const setVisibilityBird = (bird) => ({ type: types.SET_VISIBILITY_BIRD, bird });
export const setVisibilityNone = () => ({ type: types.SET_VISIBILITY_NONE });
export const setAnswer = (id) => ({ type: types.SET_ANSWER, id });
export const setTrueAnswer = (id) => ({ type: types.SET_TRUE_ANSWER, id });
export const setDisableLink = (disable) => ({ type: types.SET_DISABLE_LINK, disable });
export const setDisableButton = (disable) => ({ type: types.SET_DISABLE_BUTTON, disable });
export const setScore = () => ({ type: types.SET_SCORE });
export const setScoreQuestion = () => ({ type: types.SET_SCORE_QUESTION });
export const setNewGame = () => ({ type: types.SET_NEW_GAME });
