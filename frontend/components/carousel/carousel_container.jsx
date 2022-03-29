import { connect } from 'react-redux';
import Carousel from './carousel'
import { fetchTracks } from '../../actions/track_actions'
import { refreshTrack } from '../../actions/track_playbar_actions'


const mapStateToProps = (state, ownProps) => {
  return {
    tracks: Object.values(state.entities.tracks),
    currentTrack: state.ui.playbar.currentTrack,
    genre: ownProps.genre
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTracks: () => dispatch(fetchTracks()),
    refreshTrack: (track) => dispatch(refreshTrack(track)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Carousel)