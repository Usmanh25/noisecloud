import {
    PLAY_TRACK,
    PAUSE_TRACK,
    RECEIVE_PLAY_TRACK,
    REMOVE_PLAY_TRACK
} from '../actions/track_playbar_actions'

const _nullPlay = {
    currentTrack: null,
    isPlaying: false
}

const trackPlaybarReducer = (state = _nullPlay, action) => {

    Object.freeze(state);
    const nextState = Object.assign({}, state)

    switch(action.type) {
        case RECEIVE_PLAY_TRACK:
            nextState.currentTrack = action.song
            nextState.isPlaying = true
            return nextState
        case REMOVE_PLAY_TRACK:
            return _nullPLay
        case PLAY_TRACK:
            nextState.isPlaying = true
            return nextState
        case PAUSE_TRACK:
            nextState.isPlaying = false
            return nextState
        default:
            return state
            
    }
}

export default trackPlaybarReducer