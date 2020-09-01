import * as types from '../constants/ActionTypes';

export const setVisibilityBird = (bird) => ({ type: types.SET_VISIBILITY_BIRD, bird });
export const setVisibilityNone = () => ({ type: types.SET_VISIBILITY_NONE });

export const setDisableLink = (disable) => ({ type: types.SET_DISABLE_LINK, disable });

export const setDisableButton = (disable) => ({ type: types.SET_DISABLE_BUTTON, disable });

export const setScore = () => ({ type: types.SET_SCORE });
export const setScoreQuestion = () => ({ type: types.SET_SCORE_QUESTION });
export const setNewGame = () => ({ type: types.SET_NEW_GAME });

export const fetchSoundBirds = (sound) => ({ type: types.FETCH_SOUND_BIRDS, sound });
export const resetSoundBirds = (sound) => ({ type: types.RESET_SOUND_BIRDS, sound });

export const fetchAnswerBlock = (answerBlock) => ({ type: types.FETCH_ANSWERS_BLOCK, answerBlock });
export const resetAnswerBlock = () => ({ type: types.RESET_ANSWERS_BLOCK });
