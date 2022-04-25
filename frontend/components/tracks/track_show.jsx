import React from "react";
import { Link } from "react-router-dom";
import CommentFormContainer from "../comments/comment_form_container";
import CommentItemContainer from "../comments/comment_item_container";
import PlayButtonContainer from "../play_button/play_button_container";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'


class TrackShow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ...this.props.track
        }
    }

    componentDidMount() {
        this.props.fetchTrack(this.props.match.params.trackId)
        this.props.fetchTracks();
        this.props.fetchComments(this.props.match.params.commentId)
        // this.props.fetchComments()
    };

    render() {
        if (!this.props.track) return null;

        const genreRecommended = this.props.tracks.filter(track => track.genre === this.props.track.genre && track.id !== this.props.track.id);
        const threeItems = genreRecommended.slice(0,3);
        const renderItems = threeItems.map( (track, idx) => {
        return ( 
                <li className = 'related-genre-item' key = {`song-${idx}`}>
                    
                    <Link to = {`/tracks/${track.id}`}>
                        <img src= {track.imageUrl} alt= "song-image" className = 'related-image'/>
                    </Link>

                    <div className = 'genre-song-info'>
                        <p className = 'related-title'>{track.title}</p>
                        <p className = 'related-artist'>{track.artist}</p>
                    </div>
                </li>
            )
        })
        
        return (
            <div className="track-show-page-container">

                <div className="track-header">

                    <div className="track-header-left">

                        <div>
                            <PlayButtonContainer trackId={this.props.trackId} track={this.props.track} />
                        </div>

                        <div>
                            <h2 className="track-header-title">{this.props.track.title}</h2>
                            <h2 className="track-header-title2">{this.props.track.artist}</h2>
                            <h3><Link className="track-header-artist" to={`/users/${this.props.track.uploader_id}`}>Uploaded By</Link></h3>
                        </div>

                    </div>

                    <div className="track-header-right">
                        <div className="track-header-genre-label">
                            <h3 className="track-header-genre">{this.props.track.genre}</h3>
                        </div>
                        <img className="track-header-img" src={this.props.track.imageUrl} />
                    </div>


                </div>

                <div className="track-show-comment-section">
                    <div>
                        <CommentFormContainer
                            comments={this.props.comments}
                            commentTrackId={this.props.trackId}
                        />
                    </div>
                    <div className="under-comment-form">
                        <CommentItemContainer
                            currentUser={this.props.currentUser}
                        />
                    </div>
                </div>
                <div className = 'track-show-bottom-right'>
                                                
                    <div className = "show-label">
                        <p className = "related-label">Related Tracks</p>
                    </div>
                    <ul>
                        {renderItems}
                    </ul>
                    <div className='under-related-tracks'>
                        <span className = "meet-the-creator">Meet the Creator</span>
                        <div className = "links-container">
                                <div className="link-buttons">
                                    
                                    <a className="github" href="https://github.com/usmanh25" target="_blank">
                                        <div><FontAwesomeIcon icon={faGithub} />&#160;&#160;Github</div>
                                    </a>

                                    <a className="linkedin" href="https://www.linkedin.com/in/usman-hameed-5486b11b0/" target="_blank">
                                        <div><FontAwesomeIcon icon={faLinkedinIn} />&#160;&#160;LinkedIn</div>
                                    </a>

                                </div>

                            <div className = "fine-prints">
                                <p className = "fine-print1">Language: English(UK)</p>
                                <p className = "fine-print2">Created using React, Redux, JavaScript, Ruby on Rails, PostgreSQL, AWS, CSS, HTML</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
};

export default TrackShow;
