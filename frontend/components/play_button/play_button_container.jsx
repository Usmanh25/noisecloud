import {connect} from 'react-redux'
import PlayButton from './play_button'
import {receivePlayTrack, playTrack, pauseTrack, refreshTrack } from '../../actions/track_playbar_actions'

const mSTP = (state) => ({
    // currentTrack: state.ui.trackplayer.currentTrack,
    // isPlaying: state.ui.player.isPlaying,
    // // audio: document.getElementById('audio'),
    // currentTrack: state.ui.playbar.currentTrack,
    // tracks: state.entities.tracks,
    // paused: state.ui.playbar.paused,
    // playbar: state.ui.playbar,
    // currentUser: state.session,
    // track: ownProps.track,

    audio: document.getElementById('audio'),
    currentTrack: state.ui.trackPlaybar.currentTrack,
    tracks: state.entities.tracks,
    paused: state.ui.trackPlaybar.paused,
    trackPlaybar: state.ui.trackPlaybar,
    currentUser: state.session,
    track: ownProps.track,
});

const mDTP = dispatch => ({
    receivePlayTrack: track => dispatch(receivePlayTrack(track)),
    playTrack: () => dispatch(playTrack()),
    pauseTrack: () => dispatch(pauseTrack()),
    refreshTrack: (track) => dispatch(refreshTrack(track)),
    clearPlaybarState: () => dispatch(clearPlaybarState())
});

export default connect(mSTP, mDTP)(PlayButton);