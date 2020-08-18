import { SET_DISABLE_LINK } from '../constants/ActionTypes';

const pathName = window.location.pathname;
const defaultDisable = pathName !== '/';
const disableLink = (state = defaultDisable, { disable, type }) => {
  switch (type) {
    case SET_DISABLE_LINK:
      return disable;
    default:
      return state;
  }
};

export default disableLink;
