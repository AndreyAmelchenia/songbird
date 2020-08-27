import { FETCH_ANSWERS_BLOCK, RESET_ANSWERS_BLOCK } from '../constants/ActionTypes';

const urlSound = (name, cnt) => `https://cors-anywhere.herokuapp.com/https://www.xeno-canto.org/api/2/recordings?query=gen:${name} cnt:${cnt}`;
const urlImg = (name) => `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=b0b075509e3a1f7d187651a8c263bef7&tag_mode=all&extras=url_m&format=json&nojsoncallback=1&tags=${name}`;
const question = window.history.state !== null
&& window.history.state.state !== null && window.history.state.state.question;
const defaultAnswerBlock = question ? Array(question).fill([]) : [];
const fetchData = async (fn) => {
  const response = await fetch(fn);
  const json = await response.json();
  return json;
};

const shuffled = (arr) => arr
  .map((a) => ({ sort: Math.random(), value: a }))
  .sort((a, b) => a.sort - b.sort)
  .map((a) => a.value);

export const fetchAnswerBlock = (arr, cnt) => async (dispatch) => {
  const arrSound = arr.map((e) => fetchData(urlSound(e, cnt)));
  const arrImg = arr.map((e) => fetchData(urlImg(e)));
  const sounds = await Promise.all(arrSound);
  const img = await Promise.all(arrImg);
  const birdsImg = img.map((e) => e.photos.photo[0]);
  const birdsSounds = sounds.map((e) => e.recordings[0]);
  const birds = birdsSounds.map((e, index) => ({
    id: e.id,
    name: e.en,
    species: `${e.gen} ${e.sp}`,
    description: `https://ru.wikipedia.org/wiki/${e.en}`,
    audio: `https:${e.sono.small.slice(0, 48)}${e['file-name']}`,
    image: birdsImg[index].url_m,
    answer: index === 0,
  }));
  dispatch({ type: FETCH_ANSWERS_BLOCK, answerBlock: shuffled(birds) });
};

export const answers = (state = defaultAnswerBlock, { type, answerBlock }) => {
  switch (type) {
    case FETCH_ANSWERS_BLOCK:
      return [...state, answerBlock];
    case RESET_ANSWERS_BLOCK:
      return [];
    default:
      return state;
  }
};
