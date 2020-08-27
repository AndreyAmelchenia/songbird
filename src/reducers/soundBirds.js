import { FETCH_SOUND_BIRDS, RESET_SOUND_BIRDS } from '../constants/ActionTypes';

const urlSoundCnt = (name) => `https://cors-anywhere.herokuapp.com/https://www.xeno-canto.org/api/2/recordings?query=cnt:${name}`;

const defaultSoundBirds = localStorage.getItem('sound') ? JSON.parse(localStorage.getItem('sound')) : [];

const fetchData = async (fn) => {
  const response = await fetch(fn);
  const json = await response.json();
  return json;
};

const shuffled = (arr) => arr
  .map((a) => ({ sort: Math.random(), value: a }))
  .sort((a, b) => a.sort - b.sort)
  .map((a) => a.value);

const sort = (arr) => {
  const arrNew = [];
  arr.map((e) => e.gen).forEach((e) => !arrNew.includes(e) && arrNew.push(e));
  return arrNew;
};

export const fetchBirds = (cnt) => async (dispatch) => {
  const base = await fetchData(urlSoundCnt(cnt));
  const arr = shuffled(sort(base.recordings).slice(0, 36));
  const size = 6;
  const subarray = [];
  for (let i = 0; i < Math.ceil(arr.length / size); i += 1) {
    subarray[i] = arr.slice((i * size), (i * size) + size);
  }
  localStorage.setItem('sound', JSON.stringify(subarray));
  dispatch({ type: FETCH_SOUND_BIRDS, sound: subarray });
};

export const soundBirds = (state = defaultSoundBirds, { type, sound }) => {
  switch (type) {
    case FETCH_SOUND_BIRDS:
      return sound;
    case RESET_SOUND_BIRDS:
      localStorage.removeItem('sound');
      return [];
    default:
      return state;
  }
};
