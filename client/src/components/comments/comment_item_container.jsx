import { connect } from "react-redux";
import CommentItem from "./comment_item";
import { deleteComment } from "../../actions/comment_actions";

const mSTP = (state, ownProps) => {
  const trackId = ownProps.trackId; // You must pass this prop from parent
  return {
    comments: Object.values(state.entities.comments).filter(
      comment => comment.trackId === trackId
    ),
    users: state.entities.users
  };
};

const mDTP = dispatch => ({
  deleteComment: commentId => dispatch(deleteComment(commentId))
});

export default connect(mSTP, mDTP)(CommentItem);
