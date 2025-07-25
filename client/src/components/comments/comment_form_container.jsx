import { createComment } from '../../actions/comment_actions';
import { connect } from 'react-redux';
import CommentForm from './comment_form';

const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    comment: {
        body: '',
        track_id: ownProps.commentTrackId
    }
});

const mDTP = dispatch => ({
    createComment: comment => dispatch(createComment(comment))
});
  
export default connect(mSTP, mDTP)(CommentForm);