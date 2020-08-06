import COMPLETE_ALL_BIRDS from '../constants/ActionTypes';
import birdsData from '../constants/birdsData';

function birds(state = birdsData[0], action) {
  switch (action.type) {
    case COMPLETE_ALL_BIRDS:
      return state;
    default:
      return state;
  }
}

export default birds;
