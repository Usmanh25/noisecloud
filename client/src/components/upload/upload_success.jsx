import React from 'react';
import { Link } from "react-router-dom"

const API_BASE_URL = process.env.REACT_APP_API_URL;


class UploadSuccess extends React.Component {
    constructor(props) {
        super(props);
    }

    render() { 
        
        if(this.props.state.page === 2){
        return ( 
        <div>
            <div className="success-main">

                <div className="success-message">Your song is ready for the world to hear!</div>
                <div className="current-song-success">
                        <img
                            className="upload-song-pic"
                            src={
                                this.props.state.imageUrl?.startsWith("/rails")
                                ? `${API_BASE_URL}${this.props.state.imageUrl}`
                                : this.props.state.imageUrl
                            }
                            alt=""
                        />
                        {/* <img className="upload-song-pic" src={this.props.state.imageUrl} alt=""/> */}
                        
                        <div className="upload-info">
                            <div className="upload-text-group">
                                <div className="uploaded-by">
                                    Uploaded By{' '}
                                    <Link className="upload-username" to={`/users/${this.props.state.userId}`}>@{this.props.currentUser.email.split('@')[0]}</Link>
                                </div>
                                <div className="upload-song-title">{this.props.state.title}</div>
                                <div className="upload-song-title">{this.props.state.artist}</div>
                            </div>
                            <Link className="link-to-song" to={`/tracks/${this.props.state.trackId}`}>
                                Go to your Track!
                            </Link>
                                               
                        </div>
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