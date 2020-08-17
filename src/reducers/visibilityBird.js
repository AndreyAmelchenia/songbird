import { SET_VISIBILITY_BIRD } from '../constants/ActionTypes';
// import { HOME } from '../constants/Url';

const visibilityBird = (state = {}, { bird, type }) => {
  switch (type) {
    case SET_VISIBILITY_BIRD:
      return bird;
    default:
      return state;
  }
};

export default visibilityBird;
