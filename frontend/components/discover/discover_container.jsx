import { fetchTracks } from '../../actions/track_actions'
import {connect} from 'react-redux'
// import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";
import Discover from './discover'

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    tracks: state.entities.tracks,
    users: state.entities.users
})

const mDTP = dispatch => ({
    fetchTracks: () => dispatch(fetchTracks())
})

export default connect(mSTP, mDTP)(Discover)