import { fetchTracks } from '../../actions/track_actions'
import {connect} from 'react-redux'
import Discover from './discover'
import { refreshTrack } from '../../actions/track_playbar_actions'


const mSTP = state => {
    // tracks: Object.values(state.entities.tracks),
    // currentUser: state.entities.users[state.session.id],
    // users: state.entities.users,
    // currentTrack: state.ui.track_playbar.currentTrack,
    return {
        currentUser: state.entities.users[state.session.id],
        tracks: Object.values(state.entities.tracks),
    }

}

const mDTP = dispatch => {
    return {
        fetchTracks: () => dispatch(fetchTracks()),
        refreshTrack: (track) => dispatch(refreshTrack(track)),
    }
}

export default connect(mSTP, mDTP)(Discover)