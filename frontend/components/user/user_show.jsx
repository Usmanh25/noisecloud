import React from 'react';
import PlayButtonContainer from '../play_button/play_button_container';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faAngellist } from '@fortawesome/free-brands-svg-icons'
import { FaTrash } from 'react-icons/fa';


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
        const userTracks = this.props.tracks.filter(track => track.uploader_id === this.props.user.id)
       
        const trackItems = userTracks.length > 0 ? userTracks.map((track,idx) => {
            let num = idx + 1;
            let deleteButton = track.uploader_id === currentUserId ? 
            <FaTrash className = "track-delete" onClick = {() => this.props.deleteTrack(song.id)}/> : null;
           
            return (
                <li className = "track-list-item" key = {`track-${idx}`}>
                    
                    <div className = "track-list-item-container">
                        <img src= {track.imageUrl} alt="track-photo" className = "track-image"/>
                        <Link to = {`/tracks/${track.id}`}>
                            <div className = "track-info">
                                <span className = "track-list-title">{track.title}</span>
                                <span className = "track-artist">{track.artist}</span>
                            </div>
                        </Link>
                        
                      
                    </div>
                   
                   

                    <div className = "play-button">
                        <PlayButtonContainer track = {track}/>
                    </div>

                    {deleteButton}
                </li>
            )
        }) : <Link className="first-upload" to="/upload">Upload Your First Track!</Link>
        

        
        return (
            <div className = "user-show-page-container">
                <div className = "user-header">

                    <div className= 'user-header-left-container'>

                        <div className = "user-header-left">
                            <img src= {this.props.user.defaultPhoto} alt= "" className='user-profile-pic'/>
                            
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
                                            <div><FontAwesomeIcon icon={faGithub} />&#160;&#160;Github</div>
                                        </a>

                                        <a className="linkedin" href="https://www.linkedin.com/in/usman-hameed-5486b11b0/" target="_blank">
                                            <div><FontAwesomeIcon icon={faLinkedinIn} />&#160;&#160;LinkedIn</div>
                                        </a>

                                        <a className="angellist" href="https://angel.co/u/usman-hameed-2" target="_blank">
                                            <div><FontAwesomeIcon icon={faAngellist} />&#160;&#160;AngelList</div>
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
            </div>
        )
    }
}
export default UserShow;

























