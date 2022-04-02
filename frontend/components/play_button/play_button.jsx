import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

const PlayButton = (props) => {
    
    let playControl = null;
    
    if (!props.currentTrack) {
        playControl =   <div className = "play-container" id = "play"
        onClick = {() => {props.receivePlayTrack(props.track)}}>
                            <FontAwesomeIcon icon = {faPlay} className = "play-control" />
                        </div>
    } else if (props.currentTrack) {
         playControl =   <div className = "play-container" onClick = {() => props.pauseTrack()}>
                            <FontAwesomeIcon icon = {faPause} className = "play-control" />
                        </div>
    } 

    if (props.currentTrack && props.currentTrack.id !== props.track.id) {
        playControl =   <div className = "play-container" 
        onClick = {() => {props.receivePlayTrack(props.track)}}>
                            <FontAwesomeIcon icon = {faPlay} className = "play-control" />
                        </div>
    } else if ( props.currentTrack && props.currentTrack.id === props.track.id && !props.isPlaying) {
        playControl = <div className = "play-container" onClick = {() => props.playTrack()}>
                            <FontAwesomeIcon icon = {faPlay} className = "play-control" />
                    </div>
    } 
    
    return (
        <>
            {playControl}
        </>   
    )   
}

export default PlayButton;