import { connect } from 'react-redux';
import TrackShow from './track_show';
import { fetchTrack, fetchTracks, deleteTrack } from '../../actions/track_actions';
import { fetchComments } from '../../actions/comment_actions';

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        currentUserId: state.session.id,
        track: state.entities.tracks[ownProps.match.params.trackId],
        tracks: Object.values(state.entities.tracks),
        users: Object.values(state.entities.users),
        // commments: Object.values(state.entities.trackscomments),
        trackId: ownProps.match.params.trackId,
        currentTrack: state.ui.trackPlaybar.currentTrack
        // currentTrack: state.entities.tracks[state.ui.trackPlaybar.id],
    }
}

const mDTP = (dispatch) => {

    return {
        fetchTrack: trackId => dispatch(fetchTrack(trackId)),
        fetchTracks: () => dispatch(fetchTracks()),
        deleteTrack: trackId => dispatch(deleteTrack()),
        fetchComments: () => dispatch(fetchComments())
    }
}

export default connect(mSTP,mDTP)(TrackShow);