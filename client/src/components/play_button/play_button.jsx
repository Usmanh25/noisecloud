import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

const PlayButton = (props) => {
  const { currentTrack, isPlaying, track, receivePlayTrack, playTrack, pauseTrack } = props;
  const isCurrent = currentTrack && currentTrack.id === track.id;

  const handleClick = () => {
    if (!isCurrent) {
      // Play this new track
      receivePlayTrack(track);
    } else if (isPlaying) {
      // Pause current track
      pauseTrack();
    } else {
      // Resume playing current track
      playTrack();
    }
  };

  return (
    <div className="play-container" onClick={handleClick}>
      <FontAwesomeIcon 
        icon={isCurrent && isPlaying ? faPause : faPlay} 
        className="play-control" 
      />
    </div>
  );
};

export default PlayButton;
