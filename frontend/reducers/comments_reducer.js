import {
  RECEIVE_COMMENTS,
  RECEIVE_COMMENT,
  REMOVE_COMMENT
} from '../actions/comment_actions';

import { RECEIVE_TRACK } from '../actions/track_actions';

const commentsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = { ...state };

    switch(action.type) {
        case RECEIVE_COMMENTS:
            nextState = {};
            action.comments.forEach(comment => {
                nextState[comment.id] = comment;
            });
            return nextState;

        case RECEIVE_COMMENT:
            nextState[action.comment.id] = action.comment;
            return nextState;

        case REMOVE_COMMENT:
            delete nextState[action.commentId];
            return nextState;

        case RECEIVE_TRACK:
            return { ...action.track.comments };

        default:
            return state;
    }
}

export default commentsReducer;
