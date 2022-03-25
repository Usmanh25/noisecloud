import React from 'react'
import GreetingContainer from '../greeting/greeting_container'

class Splash extends React.Component{
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // this.props.fetchTracks()
    }

    render() {

        return ( 
            <div className="splash-container">
                <div className="slideshow-container">
                    <div className="greeting-container">
                        <h1 className="noisecloud-logo">☁️</h1>
                        <GreetingContainer />
                    </div>
                </div>

                <div className="trending-music-div">
                    <div className="searchbar-container">
                        <input className="searchbar" placeholder="Search for artists, bands, tracks, podcasts" type="text" name="" id=""/>
                        <p className="or">or</p>
                        <button className="upload-your-own-button" onClick={() => this.props.openModal("signup")}>Upload your own</button>
                    </div>
                    <div className="trending-tracks-title">Hear what's trending for free in the NoiseCloud community</div>
                    <div className="splash-songs">
                        {/* {newSongs} */}
                    </div>
                    <button className="explore-trending-playlists-button" value="Explore trending playlists" onClick={() => this.props.openModal("signup")}>Explore trending playlists</button>
                </div>


                <div className="mobile-banner">
                    <div className="mobile-picture"></div>
                    <div className="mobile-info">
                        <h2>Never stop listening</h2>
                        <div className="under-line"></div>
                        <div className="mobile-info-text">NoiseCloud is available on Web, iOS, Android, Sonos, Chromecast, and Xbox One</div>
                    </div>
                </div>
                

                <div className="calling-all-creators">
                    <h2 className="cac-header">Calling all Creators</h2>
                    <p className="cac-text">Get on NoiseCloud to connect with fans, share your sounds, and grow your audience. What are you waiting for?</p>
                    <button className="cac-button" onClick={() => this.props.openModal("signup")}>Find out more</button>
                </div>


                <div className="bottom-container">
                    <h2 className="thanks-for-listening">Thanks for listening. Now join in.</h2>
                    <h2 className="save-tracks">Save tracks, follow artist and build playlists. All for free.</h2>
                    <button className="bottom-signup-button" onClick={() => this.props.openModal("signup")}>Create account</button>
                    <div className="bottom-signin">
                        <p>Already have an account?</p>
                        <button onClick={() => this.props.openModal("login")}>Sign in</button>
                    </div>
                </div>


                <div className="fine-print">
                    <hr className="gray-line"></hr>
                    <p>Directory - About us - Creator Resources - Blog - Jobs - Developers - Help - Legal - Privacy - Cookie Policy - Cookie Manager - Imprint - Charts </p>
                    <p>Language:English (US)</p>
                </div>
            </div>

         );
    }
}
 
export default Splash;