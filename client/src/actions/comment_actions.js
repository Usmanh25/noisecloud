import * as CommentApiUtil from '../util/comment_api_util'

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS"
export const RECEIVE_COMMENT = "RECEIVE_COMMENT"
export const REMOVE_COMMENT = "REMOVE_COMMENT"

const receiveComments = comments => {
    return {
        type: RECEIVE_COMMENTS,
        comments
    };
};

const receiveComment = comment => {
    return {
        type: RECEIVE_COMMENT,
        comment
    };
};

const removeComment = commentId => {
    return {
        type: REMOVE_COMMENT,
        commentId
    };
};

export const fetchComments = (trackId) => dispatch => {
    return CommentApiUtil.fetchComments(trackId)
    .then(comments => dispatch(receiveComments(comments)))
}

export const createComment = comment => dispatch => {
    return CommentApiUtil.createComment(comment)
        .then(newComment => {
        // Normalize trackId
        newComment.trackId = newComment.track_id;
        return dispatch(receiveComment(newComment));
    });
}

export const deleteComment = commentId => dispatch => {
    return CommentApiUtil.deleteComment(commentId)
        .then(() => dispatch(removeComment(commentId)))
}