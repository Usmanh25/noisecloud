import { connect } from "react-redux"
import Splash from "./splash"
import { openModal, closeModal } from '../../actions/modal_actions'
// import { fetchTracks } from '../../actions/track_actions'

const mSTP = state => ({
    // tracks: Object.values(state.entities.tracks)
})

const mDTP = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
    // fetchTracks: () => dispatch(fetchTracks())
})

export default connect(mSTP,mDTP)(Splash)