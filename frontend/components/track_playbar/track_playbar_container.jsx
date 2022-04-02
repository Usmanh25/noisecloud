import { connect } from "react-redux";
import TrackPlaybar from "./track_playbar";
import { receivePlayTrack, removePlayTrack, playTrack, pauseTrack } from "../../actions/track_playbar_actions";

const mSTP = state => ({
    track: state.ui.trackPlaybar.currentTrack
});

const mDTP = dispatch => ({
    receivePlayTrack: track => dispatch(receivePlayTrack(track)),
    removePlayTrack: () => dispatch(removePlayTrack()), 
    playTrack: () => dispatch(playTrack()),
    pauseTrack: () => dispatch(pauseTrack())
});

export default connect(mSTP, mDTP)(TrackPlaybar);

