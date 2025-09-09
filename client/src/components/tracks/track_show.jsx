import React from "react";
import { Link } from "react-router-dom";
import CommentFormContainer from "../comments/comment_form_container";
import CommentItemContainer from "../comments/comment_item_container";
import PlayButtonContainer from "../play_button/play_button_container";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
const API_BASE_URL = process.env.REACT_APP_API_URL || '/api';
class TrackShow extends React.Component {

    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        this.props.fetchTrack(this.props.match.params.trackId);
        this.props.fetchTracks();
        this.props.fetchComments(this.props.match.params.trackId);
    }

    componentDidUpdate(prevProps) {
        const oldId = prevProps.match.params.trackId;
        const newId = this.props.match.params.trackId;

        if (oldId !== newId) {
            this.props.fetchTrack(newId);
            this.props.fetchComments(newId);
        }
    }
  
    
    render() {
        if (!this.props.track) return null;

        const backgroundImageUrl = this.props.track.imageUrl?.startsWith("/rails")
            ? `${API_BASE_URL}${this.props.track.imageUrl}`
            : this.props.track.imageUrl;
            
        const genreRecommended = this.props.tracks.filter(track => track.genre === this.props.track.genre && track.id !== this.props.track.id);
        const threeItems = genreRecommended.slice(0,3);
        const renderItems = threeItems.map( (track, idx) => {
        console.log("TrackShow render - this.props.track:", this.props.track);

        return ( 
                <li className = 'related-genre-item' key = {`song-${idx}`}>
                    
                    <Link to = {`/tracks/${track.id}`}>
                        <img
                            src={
                                track.imageUrl?.startsWith("/rails")
                                ? `${API_BASE_URL}${track.imageUrl}`
                                : track.imageUrl
                            }
                            alt="song-image"
                            className="related-image"
                        />
                    </Link>

                    <div className = 'genre-song-info'>
                        <p className = 'related-artist'>{track.artist}</p>
                        <p className = 'related-title'>{track.title}</p>
                    </div>
                </li>
            )
        })
        
        return (
            <div className="track-show-page-container">

                <div
                    className="track-header"
                    style={{ '--track-image': `url(${backgroundImageUrl})` }}>
                    
                    <div className="track-header-left">

                        <div className="track-header-play-button">
                            <PlayButtonContainer trackId={this.props.trackId} track={this.props.track} />
                        </div>

                        <div className="track-header-text-group">
                            <h2 className="track-title">{this.props.track.title}</h2><p className="track-artist">{this.props.track.artist}</p>
                        </div>



                    </div>

                    <div className="track-header-right">
                        <div className="genre-and-image">
                            <div className="image-wrapper">
                                <div className="track-header-genre-label">
                                    <h3 className="track-header-genre"># {this.props.track.genre}</h3>
                                </div>
                                <img
                                    className="track-header-img"
                                    alt={this.props.track.title}
                                    src={
                                        this.props.track.imageUrl?.startsWith("/rails")
                                        ? `${API_BASE_URL}${this.props.track.imageUrl}`
                                        : this.props.track.imageUrl
                                    }
                                />
                            </div>
                        </div>
                    </div>


                </div>

                <div className="track-show-comment-section">
                    <div>
                        <CommentFormContainer
                            commentTrackId={this.props.track.id}
                        />
                    </div>
                    <div>
                        <CommentItemContainer
                            currentUser={this.props.currentUser}
                            track={this.props.track}
                        />
                    </div>
                </div>
                <div className='track-show-bottom-right'>
                                                
                    <div>
                        <p className="related-label">Related Tracks</p>
                    </div>
                    <ul>
                        {renderItems}
                    </ul>
                    <div>
                        <span className="meet-the-creator">Meet the Creator</span>
                        <div>
                                <div className="link-buttons">
                                    
                                    <a 
                                        className="github" 
                                        href="https://github.com/usmanh25" 
                                        target="_blank"
                                        rel="noreferrer"
                                        >
                                        <div><FontAwesomeIcon icon={faGithub} className='github'/></div>
                                    </a>

                                    <a 
                                        className="linkedin" 
                                        href="https://www.linkedin.com/in/usman-hameed-5486b11b0/" 
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <div><FontAwesomeIcon icon={faLinkedinIn} className='linkedin'/></div>
                                    </a>

                                </div>

                            <div>
                              <p>Language: English (US) <br></br><br></br>Created using React, Redux, JavaScript, Ruby on Rails, PostgreSQL, Amazon AWS</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
};

export default TrackShow;
