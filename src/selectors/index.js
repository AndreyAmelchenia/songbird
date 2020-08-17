import {
  ONE, THREE, TWO, FIVE, FOUR, SIX,
} from '../constants/Url';
// import birdsData from '../constants/birdsData';

const getVisibleMain = (visibilityUrl) => {
  if (!visibilityUrl) {
    return true;
  }
  switch (visibilityUrl) {
    case ONE:
    case TWO:
    case THREE:
    case FIVE:
    case FOUR:
    case SIX:
      return true;
    default:
      return undefined;
  }
};

export default getVisibleMain;
// export const getCompletedTodoCount = createSelector(
//   [getTodos],
//   (todos) => (
//     todos.reduce((count, todo) => (todo.completed ? count + 1 : count),
//       0)
//   ),
// );
