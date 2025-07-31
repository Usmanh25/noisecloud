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
                    <div className="loginsignupspan">
                        <button className="login-button" onClick={() => this.props.openModal("login")}>Sign in</button>
                        <button className="signup-button" onClick={() => this.props.openModal("signup")}>Create account</button>
                    </div>

                    <div className="slideshow-content">
                        <div className="slideshow-headings">
                            <h1 className="noisecloud-logo">☁️</h1>
                            <h2 className="ptxt0">Discover.<br />Get Discovered.</h2>
                            
                            <div className="slideshow-text">
                                <p className="ptxt1"> Discover your next obsession, or become someone else’s.
                                    SongCloud is the only community where fans and artists come together to 
                                    discover and connect through music.
                                </p>
                            </div>
                        </div>
                        
                        <button className="start-uploading-today-button" onClick={() => this.props.openModal("signup")}>Get Started</button>
                    </div>
                </div>


                <div className="searchbar-container">
                    <input 
                        className="searchbar" 
                        placeholder="Search for artists, bands, tracks, podcasts" 
                        type="text" 
                        onKeyDown={(e) => {
                            if (e.key === "Enter") this.props.openModal("signup")
                        }}
                    />
                    <p className="or">or</p>
                    <button 
                        className="upload-your-own-button" 
                        onClick={() => this.props.openModal("signup")}
                    >
                        Upload your own
                    </button>
                </div>


                <div>
                    <div className="trending-tracks-title">Hear what's trending for free in the SongCloud community</div>
                </div>


                <div>
                    <button className="explore-trending-playlists-button" onClick={() => this.props.openModal("signup")}>Explore trending playlists</button>  
                </div>

                <div
                    className="mobile-banner"
                    style={{ backgroundImage: `url('/mobile-banner.png')` }}
                >
                    <div className="mobile-info">
                        <h2>Never stop listening</h2>
                        <div className="under-line"></div>
                        <div className="mobile-info-text">
                            SongCloud is available on Web, 
                            iOS, Android, Sonos, Chromecast, 
                            and Xbox One
                        </div>
                    </div>
                </div>
                


                <div
                    className="calling-all-creators"
                    style={{
                        backgroundImage: `url('/creator-banner.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'top',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <h2 className="cac-header">Calling all Creators</h2>
                    <p className="cac-text">Get on SongCloud to connect 
                        with fans, share your sounds, <br></br>and grow your 
                        audience. What are you waiting for?</p>
                    <button 
                        className="cac-button" 
                        onClick={() => this.props.openModal("signup")}
                        >
                            Find out more
                    </button>
                </div>



                <div className="bottom-container">
                    <h2 className="thanks-for-listening">Thanks for listening. Now join in.</h2>
                    <h2 className="save-tracks">Save tracks, follow artist and build playlists. All for free.</h2>
                    <button className="bottom-signup-button" onClick={() => this.props.openModal("signup")}>Create account</button>
                    <div className="bottom-signin">
                        <p>Already have an account? <span className="bottom-signin-link" onClick={() => this.props.openModal("login")}>Sign in</span></p>
                    </div>
                </div>



                <div className="fine-print">
                    <p>Directory · About us · Artist Resources · Blog · Jobs · Developers · Help · Legal · Do Not Sell or Share My Personal Information ⁃ Privacy · Cookie Policy · Cookie Manager · Imprint · Charts Transparency Reports Transparency Reports</p>
                    <p>Language:English (US)</p>
                </div>



            </div>
        );
    }
}
 
export default Splash;
