import React from 'react';
import PlayButtonContainer from '../play_button/play_button_container';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FaTrash } from 'react-icons/fa';
import API_BASE_URL from '../../util/config';

class UserShow extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId);
        this.props.fetchTracks();
    }

    render() {
        if (!this.props.user) return null;

        const currentUserId = this.props.currentUserId;
        const userTracks = this.props.tracks
            .filter(track => track.uploader_id === this.props.user.id)
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        // const userTracks = this.props.tracks.filter(track => track.uploader_id === this.props.user.id)
       
        const trackItems = userTracks.length > 0 ? userTracks.map((track,idx) => {
            let num = idx + 1;
            let deleteButton = track.uploader_id === currentUserId ? 
            <FaTrash className = "track-delete" onClick = {() => this.props.deleteTrack(track.id)}/> : null;
           
            return (
                <li className = "track-list-item" key = {`track-${idx}`}>
                    
                    <div className = "track-list-item-container">
                        <div className="track-image-container">
                            <Link to = {`/tracks/${track.id}`}>

                                {/* <img src= {track.imageUrl} alt="track-photo" className = "track-image"/> */}

                                <img
                                    src={
                                        track.imageUrl?.startsWith("/rails")
                                        ? `${API_BASE_URL}${track.imageUrl}`
                                        : track.imageUrl || "https://noisecloud-seeds.s3.us-west-1.amazonaws.com/default-track-cover.jpg"
                                    }
                                    alt="track-photo"
                                    className="track-image"
                                />

                            
                            </Link>
                        </div>
                        <div className = "play-button">
                            <PlayButtonContainer track = {track}/>
                        </div>
                        <div className="track-list-text-container">
                            <Link to = {`/tracks/${track.id}`}>
                                <div className = "track-info">
                                    <span className = "track-artist-user">{track.artist}</span>
                                    <span className = "track-list-title">{track.title}</span>
                                </div>
                            </Link>
                            <span className = "track-list-genre"># {track.genre}</span>

                        </div>
                        {deleteButton}
                    </div>
                   
                   
                    

                </li>
            )
        }) : <div className="first-upload-container">
                <Link className="first-upload" to="/upload">Upload Your First Track!</Link>
            </div>
        

        
        return (
            <div className = "user-show-page-container">
                <div className = "user-header">

                    <div className= 'user-header-left-container'>

                        <div className = "user-header-left">
                            <img
                                src={
                                    this.props.user.imageUrl?.startsWith("/rails")
                                    ? `${API_BASE_URL}${this.props.user.imageUrl}`
                                    : this.props.user.imageUrl || "https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Profile.jpg"
                                }
                                alt="profile"
                                className="user-profile-pic"
                            />
                            {/* <img
                            src="https://noisecloud-seeds.s3.us-west-1.amazonaws.com/Profile.jpg"
                            alt="profile"
                            className="user-profile-pic"
                            /> */}
                            
                            <div className = "username-container">
                                <span className = "username">{this.props.user.email.slice(0, this.props.user.email.indexOf('@'))}</span>
                            </div>
                        </div>

                    </div>


                </div>

                <div className = "user-bottom">
                    <div className = "uploaded-tracks-container">
                            <span className = "uploaded-tracks">Uploaded Tracks</span>
                    </div>

                    <div className = "user-tracks">
                        <ul className = "user-tracks-list">
                            {trackItems}
                        </ul>

                        <div className = "user-show-bottom-right">
                            
                            <div className = "number-uploaded-tracks">
                                <span className = "tracks">Tracks</span>
                                <span className = "number-tracks">{userTracks.length}</span>
                            </div>

                            <span className = "meet-the-creator-user">Meet the Creator</span>
                            <div className = "links-container">
                                    <div className="link-buttons-user">
                                        <a className="github" href="https://github.com/usmanh25" target="_blank">
                                            <div><FontAwesomeIcon icon={faGithub} /></div>
                                        </a>

                                        <a className="linkedin" href="https://www.linkedin.com/in/usman-hameed-5486b11b0/" target="_blank">
                                            <div><FontAwesomeIcon icon={faLinkedinIn} /></div>
                                        </a>


                                    </div>

                                <div className = "fine-prints">
                                    <p>Language: English (US) <br></br><br></br>Created using React, Redux, JavaScript, Ruby on Rails, PostgreSQL, Amazon AWS</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default UserShow;

























