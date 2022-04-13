import React from 'react'

class Splash extends React.Component{
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchTracks()
    }

    render() {

        if (!this.props) { return null }

        const { fetchTracks, tracks, openModal } = this.props;

        const sampleTracks = [];
        const givenTracks = Object.values(tracks)
        for (let i = 0; i < 12; i++) {
            sampleTracks.push(givenTracks[i])
        }

        return ( 
            <div className="splash-container">



                <div className="slideshow-container">
                    <span>
                        <h1 className="noisecloud-logo">
                            ☁️     
                            <span className='loginsignupspan'>
                                <button className="login-button" onClick={() => this.props.openModal("login")}>Sign in</button>
                                <button className="signup-button" onClick={() => this.props.openModal("signup")}>Create account</button>
                            </span>
                        </h1>
                    </span>
                    <br />
                    <h2 className='ptxt0'>What's next in music is first on NoiseCloud</h2>
                    <br />
                    <p className='ptxt1'>
                        Upload your first track and begin your journey. NoiseCloud gives
                    </p>
                    <br />
                    <p className='ptxt2'>
                        you space to create, find your fans, and connect with other 
                    </p>
                    <br />
                    <p className='ptxt3'>
                        artists
                    </p>
                    <br />
                    <button className="start-uploading-today-button" onClick={() => this.props.openModal("signup")}>Start Uploading Today</button>
                </div>



                <div className="trending-tracks-title">Hear what's trending for free in the NoiseCloud community</div>



                <div className="searchbar-container">
                        <input className="searchbar" placeholder="Search for artists, bands, tracks, podcasts" type="text" name="" id=""/>
                        <p className="or">or</p>
                        <button className="upload-your-own-button" onClick={() => this.props.openModal("signup")}>Upload your own</button>
                </div>



                <div className="trending-music-div">
                    <ul className="trending-music-list">
                        {
                            sampleTracks.map(track => (
                                track ? 
                                (<span className="trending-music-obj" key={track.id}>
                                    <li>
                                        <img className="track-img" src={track.imageUrl} />
                                    </li>
                                </span>) : null
                            ))
                        }
                    </ul>
                </div>

                <button className="explore-trending-playlists-button" value="Explore trending playlists" onClick={() => this.props.openModal("signup")}>Explore trending playlists</button>


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
