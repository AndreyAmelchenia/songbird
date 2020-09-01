import { SET_DISABLE_BUTTON } from '../constants/ActionTypes';

const disableButton = (state = true, { disable, type }) => {
  switch (type) {
    case SET_DISABLE_BUTTON:
      return disable;
    default:
      return state;
  }
};

export default disableButton;
