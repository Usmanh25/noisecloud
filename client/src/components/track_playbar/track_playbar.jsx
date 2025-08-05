import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faStepBackward, faRedoAlt, faVolumeMute, faVolumeDown, faVolumeUp  } from "@fortawesome/free-solid-svg-icons";
const API_BASE_URL = process.env.REACT_APP_API_URL || '/api';

class TrackPlaybar extends React.Component {
  constructor(props) {
    super(props);
    this.audioRef = React.createRef();

    this.state = {
      loop: false,
      muted: false,
      volume: 0.5,
      mutedVolume: 0.5,
      elapsed: 0,
      duration: 0,
      remainder: false,
      hover: false
    }

    this.toggleMute = this.toggleMute.bind(this);
    this.setDuration = this.setDuration.bind(this);
    this.handleRestart = this.handleRestart.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.playTrack = this.playTrack.bind(this);
    this.handleEnded = this.handleEnded.bind(this);
    this.handleSeek = this.handleSeek.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
  }
  
  componentDidUpdate(prevProps) {
    const audioEl = this.audioRef?.current;
    if (!audioEl) return;

    const trackChanged = prevProps.currentTrack?.id !== this.props.currentTrack?.id;
    const toggledPlay = prevProps.isPlaying !== this.props.isPlaying;

    if (trackChanged && this.props.currentTrack) {
        audioEl.src = `${API_BASE_URL}${this.props.currentTrack.audioUrl}`;

        audioEl.load();

        if (this.props.isPlaying) {
            audioEl.addEventListener(
                "canplaythrough",
                () => {
                    audioEl.play().catch((err) =>
                        console.warn("Play error after track change:", err)
                    );
                },
                { once: true }
            );
        }
    } else if (toggledPlay) {
        if (this.props.isPlaying) {
            if (audioEl.readyState >= 3) {
                audioEl.play().catch((err) =>
                    console.warn("Play error on toggle:", err)
                );
            } else {
                audioEl.addEventListener(
                    "canplaythrough",
                    () => {
                        audioEl.play().catch((err) =>
                            console.warn("Play error delayed:", err)
                        );
                    },
                    { once: true }
                );
            }
        } else {
            audioEl.pause();
        }
    }

    // Sync volume
    if (prevProps.volume !== this.props.volume) {
        audioEl.volume = this.props.volume;
    }
  }
 

  toggleField(key) {
    this.setState({ [key]: !this.state[key] });
  }

  toggleMute() {
    if (this.state.muted) {
      this.setState({ muted: false, volume: this.state.mutedVolume });
    } else {
      this.setState({ muted: true, volume: 0, mutedVolume: this.state.volume });
    }
  }

  setDuration() {
    this.setState({ duration: document.getElementById("audio").duration });
  }

  handleRestart() {
    document.getElementById("audio").currentTime = 0;
    this.setState({ elapsed: 0 });
  }

  handlePlay() {
    if (!this.props.isPlaying) {
      this.props.playTrack();
    } else {
      this.props.pauseTrack();
    }
  }

  playTrack() {
    this.setState({ elapsed: document.getElementById("audio").currentTime });
    if (this.props.isPlaying) requestAnimationFrame(this.playTrack);
  }

  handleEnded(){
    this.props.pauseTrack();
    this.handleRestart();
  }

  handleSeek(e) {
    document.getElementById("audio").currentTime = e.target.value;
    this.setState({ elapsed: e.target.value });
  }

  handleVolume(e) {
    document.getElementById("audio").volume = e.target.value;
    this.setState({ volume: e.target.value, muted: false });
  }

  calcTime(time) {
    let min = Math.floor(time / 60);
    let sec = Math.floor(time % 60);
    let formattedSecs = sec <= 9 ? `0${sec}` : sec;
    return `${min}:${formattedSecs}`;
  }

  handleHover(mode) {
    this.setState({ hover: mode });
  }

  render() {
    if (!this.props.currentTrack) return null;

    let uploader = this.props.users[this.props.currentTrack.uploader_id];

    let volumeOn = this.state.volume >= 0.5 ? <FontAwesomeIcon icon={faVolumeUp} size="lg" /> : <FontAwesomeIcon icon={faVolumeDown} size="lg" />;
    let volumeButton = (this.state.muted || this.state.volume <= 0) ? <FontAwesomeIcon icon={faVolumeMute} size="lg" /> : volumeOn;
    let volumeBar = (
      <div className="volume-container"  onMouseEnter={()=>this.handleHover(true)}>
        <input type="range" className="volumebar"
          onChange={this.handleVolume}
          min="0"
          max="1"
          value={this.state.volume}
          step="0.01" />
      </div>
    );

    let playButton = this.props.isPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />;

    let loopClass = this.state.loop ? "is-looping-button" : "backplayloopbuttons";

    let elapsed = this.calcTime(this.state.elapsed);
    let duration = this.state.remainder ? "-" + this.calcTime(this.state.duration - this.state.elapsed) : this.calcTime(this.state.duration);

    return (
      <div className="trackplaybar">
        <div className="track-scrub-container">
          <div className="playpauseloop">
            <button className="backplayloopbuttons" onClick={this.handleRestart}><FontAwesomeIcon icon={faStepBackward} /></button>
            <button className="backplayloopbuttons" onClick={this.handlePlay}>{playButton}</button>
            <button className={loopClass} onClick={()=>this.toggleField("loop")}><FontAwesomeIcon icon={faRedoAlt} /></button>
          </div>
          <div className="track-scrub-bar">
            <span className="elapsed">{elapsed}</span>
            <div className="scrub-bar">
              <audio 
                ref={this.audioRef} 
                id="audio" 
                autoPlay
                src={`${API_BASE_URL}${this.props.currentTrack.audioUrl}`}
                loop={this.state.loop}
                muted={this.state.muted}
                onLoadedMetadata={this.setDuration}
                onPlaying={this.playTrack}
                onEnded={this.handleEnded} 
              />
              <input 
                type="range" 
                className="scrub-seeker"
                onChange={this.handleSeek}
                min="0"
                max={this.state.duration}
                value={this.state.elapsed}
                step="0.01" 
                style={{ "--seek-percentage": `${(this.state.elapsed / this.state.duration) * 100}%` }}
              />
            </div>
            <span onClick={()=>this.toggleField("remainder")}>{duration}</span>
          </div>
          <div className="volume" onMouseEnter={()=>this.handleHover(true)} onMouseLeave={()=>this.handleHover(false)}>
            {this.state.hover && volumeBar}
            <button className="volume-icon" onClick={this.toggleMute}>{volumeButton}</button>
          </div>
          <div className="playbar-track-item">
            <Link className="track-art" to={`/tracks/${this.props.currentTrack.id}`}>
              <img src={`${API_BASE_URL}${this.props.currentTrack.imageUrl}`} />
            </Link>
            <div className="track-info">
              <span className='artist'>{this.props.currentTrack.artist}</span>
              <h1 className='tracklink'><Link to={`/tracks/${this.props.currentTrack.id}`}>{this.props.currentTrack.title}</Link></h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TrackPlaybar;