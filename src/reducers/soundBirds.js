import { FETCH_SOUND_BIRDS } from '../constants/ActionTypes';

export const fetchSound = () => async (dispatch) => {
  const response = await fetch('https://cors-anywhere.herokuapp.com/https://www.xeno-canto.org/api/2/recordings?query=cnt:belarus');
  const json = await response.json();
  dispatch({ type: FETCH_SOUND_BIRDS, sound: json.recordings });
};

const sort = (arr) => arr.map((e) => e.en);

export const soundBirds = (state = {}, { type, sound }) => {
  switch (type) {
    case FETCH_SOUND_BIRDS:
      return sort(sound);
    default:
      return state;
  }
};
