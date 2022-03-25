import * as TrackPlaybarAPIUtil from '../util/track_api_util'

export const PLAY_TRACK = 'PLAY_TRACK'
export const PAUSE_TRACK = 'PAUSE_TRACK'
export const RECEIVE_PLAY_TRACK = 'RECEIVE_PLAY_TRACK'
export const REMOVE_PLAY_TRACK = 'REMOVE_PLAY_TRACK'

export const playTrack = () => ({
    type: PLAY_TRACK
});
  
export const pauseTrack = () => ({
    type: PAUSE_TRACK
});

export const receivePlayTrack = (track) => ({
    type: RECEIVE_PLAY_TRACK,
    track
});
export const removePlayTrack = () => ({
    type: REMOVE_PLAY_TRACK
});