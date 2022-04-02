import {connect} from 'react-redux'
import PlayButton from './play_button'
import {receivePlayTrack, playTrack, pauseTrack } from '../../actions/track_playbar_actions'

const mSTP = (state) => ({

    currentTrack: state.ui.trackPlaybar.currentTrack,
    isPlaying: state.ui.trackPlaybar.isPlaying,

});

const mDTP = dispatch => ({
    receivePlayTrack: track => dispatch(receivePlayTrack(track)),
    playTrack: () => dispatch(playTrack()),
    pauseTrack: () => dispatch(pauseTrack()),
});

export default connect(mSTP, mDTP)(PlayButton);