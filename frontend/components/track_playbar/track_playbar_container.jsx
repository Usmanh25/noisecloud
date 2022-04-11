import { connect } from "react-redux";
import TrackPlaybar from "./track_playbar";
import { receivePlayTrack, removePlayTrack, playTrack, pauseTrack } from "../../actions/track_playbar_actions";

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    currentTrack: state.ui.trackPlaybar.currentTrack,
    isPlaying: state.ui.trackPlaybar.isPlaying,
    
    users: state.entities.users
});

const mDTP = dispatch => ({
    receivePlayTrack: track => dispatch(receivePlayTrack(track)),
    removePlayTrack: () => dispatch(removePlayTrack()), 
    playTrack: () => dispatch(playTrack()),
    pauseTrack: () => dispatch(pauseTrack())
});

export default connect(mSTP, mDTP)(TrackPlaybar);

