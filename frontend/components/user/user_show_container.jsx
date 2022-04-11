import { connect } from "react-redux";
import UserShow from './user_show'
import { fetchUser, updateUser } from '../../actions/user_actions'
import { fetchUserTracks, fetchTracks, deleteTrack } from "../../actions/track_actions";

const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    currentUserId: state.session.id,
    user: state.entities.users[ownProps.match.params.userId],
    userId: ownProps.match.params.userId,
    users: state.entities.users,
    tracks: Object.values(state.entities.tracks)
})

const mDTP = dispatch => ({
    fetchUserTracks: userId => dispatch(fetchUserTracks(userId)),
    fetchUser: userId => dispatch(fetchUser(userId)),
    updateUser: user => dispatch(updateUser(user)),
    deleteTrack: trackId => dispatch(deleteTrack(trackId)),
    fetchTracks: () => dispatch(fetchTracks()),
})

export default connect(mSTP, mDTP)(UserShow);