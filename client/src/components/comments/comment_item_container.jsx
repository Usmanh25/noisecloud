import { connect } from "react-redux";
import React from "react";
import CommentItem from "./comment_item";
import { deleteComment } from "../../actions/comment_actions";

const CommentItemContainer = ({ comments, currentUser, users, deleteComment }) => {
  return (
    <div className="comments-index-container">
      <ul className="list">
        {[...comments].reverse().map(comment => (
          <CommentItem
            key={comment.id}
            comment={comment} // pass single comment
            currentUser={currentUser}
            users={users}
            deleteComment={deleteComment}
          />
        ))}
      </ul>
    </div>
  );
};

const mSTP = (state, ownProps) => {
  const trackId = ownProps.track.id;

  const comments = Object.values(state.entities.comments).filter(
    comment => comment.trackId === trackId
  );
  return {
    comments,
    currentUser: state.entities.users[state.session.id],
    users: state.entities.users
  };
};

const mDTP = dispatch => ({
  deleteComment: commentId => dispatch(deleteComment(commentId))
});

export default connect(mSTP, mDTP)(CommentItemContainer);