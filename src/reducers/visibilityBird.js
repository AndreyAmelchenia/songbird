import { SET_VISIBILITY_BIRD, SET_VISIBILITY_NONE } from '../constants/ActionTypes';

const visibilityBird = (state = {}, { bird, type }) => {
  switch (type) {
    case SET_VISIBILITY_BIRD:
      return bird;
    case SET_VISIBILITY_NONE:
      return {};
    default:
      return state;
  }
};

export default visibilityBird;
