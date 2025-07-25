import { RECEIVE_TRACK_ERRORS, REMOVE_TRACK_ERRORS } from '../src/actions/track_actions';

const trackErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_TRACK_ERRORS:
      return action.errors || ["An unknown error occurred."];
    case REMOVE_TRACK_ERRORS:
      return [];
    default:
      return state;
  }
};

export default trackErrorsReducer;