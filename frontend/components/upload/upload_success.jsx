import React from 'react';
import { Link } from "react-router-dom"


class UploadSuccess extends React.Component {
    constructor(props) {
        super(props);
    }

    render() { 
        
        if(this.props.state.page === 2){
        return ( 
        <div>
            <div className="success-main">

                <div className="current-song-success">
                        <img className="upload-song-pic" src={this.props.state.photoUrl} alt=""/>
                        <div className="upload-info">
                            <div className="upload-username">{this.props.currentUser.username}</div>
                            <div className="upload-song-title">{this.props.state.title}</div>
                            <p className="upload-complete">Upload Complete</p>
                            <Link className="link-to-song" to={`/songs/${this.props.state.songId}`}>Go to your Track</Link>
                        </div>
                        <div className="success-message">Congrats your song is upload and ready for the world to hear</div>
                </div>
            </div>
        </div> 
        );
        } else {
            return null;
        }
    }
}
 
export default UploadSuccess;