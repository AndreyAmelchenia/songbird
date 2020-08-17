import { SET_ANSWER, SET_TRUE_ANSWER } from '../constants/ActionTypes';
import birdsData from '../constants/birdsData';
import { URL } from '../constants/Url';

const pathName = window.location.pathname.slice(1);
const question = window.history.state !== null
&& window.history.state.state !== null ? window.history.state.state.question : 0;
// const finish = { name: 'finish', answer: false };
const shuffled = (arr) => arr
  .map((a) => ({ sort: Math.random(), value: a }))
  .sort((a, b) => a.sort - b.sort)
  .map((a) => a.value);

const defaultAnswer = pathName !== '' ? birdsData.filter((e) => e.id === URL.indexOf(pathName))
  .map((e, index) => ({ name: e.name, answer: index === question }))
  : shuffled(birdsData.filter((e) => e.id === 1))
    .map((e, index) => ({ name: e.name, answer: index === 0 }));
const answers = (state = defaultAnswer, { id, type }) => {
  switch (type) {
    case SET_ANSWER:
      return birdsData.filter((e) => e.id === id)
        .map((e, index) => ({ name: e.name, answer: index === 0 }));
    case SET_TRUE_ANSWER:
      return state.map((e, index) => {
        if (index === id) {
          return { ...e, answer: true };
        }
        return { ...e, answer: false };
      });
    default:
      return state;
  }
};

export default answers;
