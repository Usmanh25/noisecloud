import { connect } from "react-redux";
import Upload from "./upload"
import { createTrack, removeTrackErrors } from "../../actions/track_actions"

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.tracks
})

const mDTP = dispatch => ({
    createTrack: track => dispatch(createTrack(track)),
    removeTrackErrors: () => dispatch(removeTrackErrors())
})

export default connect(mSTP, mDTP)(Upload)