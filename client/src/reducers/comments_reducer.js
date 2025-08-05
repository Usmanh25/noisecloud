import {
  RECEIVE_COMMENTS,
  RECEIVE_COMMENT,
  REMOVE_COMMENT
} from '../actions/comment_actions';

import { RECEIVE_TRACK } from '../actions/track_actions';

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = { ...state };

  switch (action.type) {

    case RECEIVE_COMMENTS:
      action.comments.forEach(comment => {
        const normalizedComment = {
          ...comment,
          trackId: comment.track_id
        };
        nextState[comment.id] = normalizedComment;
      });
      return nextState;

    case RECEIVE_COMMENT:
      const newComment = {
        ...action.comment,
        trackId: action.comment.track_id
      };
      nextState[action.comment.id] = newComment;
      return nextState;

    case REMOVE_COMMENT:
      delete nextState[action.commentId];
      return nextState;

    case RECEIVE_TRACK:
      // Fix here: convert comments object to array before iterating
      const commentsObj = action.track.comments || {};
      const newComments = Object.values(commentsObj);
      newComments.forEach(comment => {
        nextState[comment.id] = {
          ...comment,
          trackId: comment.track_id
        };
      });
      return nextState;

    default:
      return state;
  }
};

export default commentsReducer;
