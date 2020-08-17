// import { COMPLETE_ALL_BIRDS, COMPLETE_BIRDS } from '../constants/ActionTypes';
import { createSelector } from 'reselect';
import birdsData from '../constants/birdsData';
// const birdsDefault = birdsData.filter((elem) => elem.id === 1);

const shuffled = (arr) => arr
  .map((a) => ({ sort: Math.random(), value: a }))
  .sort((a, b) => a.sort - b.sort)
  .map((a) => a.value);

const filterAnswer = (answers) => {
  let answer;
  answers.forEach((e) => {
    if (e.answer) {
      answer = e.name;
    }
  });
  return answer;
};

const answerTrue = (state) => state.answers;

const birds = createSelector(
  answerTrue,
  (answers) => shuffled(birdsData.filter((elem) => elem.name === filterAnswer(answers))
    .concat(shuffled(birdsData
      .filter((elem) => elem.name !== filterAnswer(answers)))
      .splice(0, 5))),
);

export default birds;
