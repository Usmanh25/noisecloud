import { fetchTracks } from '../../actions/track_actions'
import {connect} from 'react-redux'
import Discover from './discover'
import { receivePlayTrack } from '../../actions/track_playbar_actions'


const mSTP = state => {
    return {
        currentUser: state.entities.users[state.session.id],
        tracks: Object.values(state.entities.tracks),
    }

}

const mDTP = dispatch => {
    return {
        fetchTracks: () => dispatch(fetchTracks()),
        receivePlayTrack: track => dispatch(receivePlayTrack(track))
    }
}

export default connect(mSTP, mDTP)(Discover)