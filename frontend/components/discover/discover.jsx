import React from "react";
import PlayButtonContainer from "../play_button/play_button_container";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'


class Discover extends React.Component {

    componentDidMount () {
        this.props.fetchTracks();
    }

    render () {
        if (!this.props.tracks) { return null }

        const { tracks } = this.props;

        const rap = [];
        const rnb = [];
        const pop = [];
        const latin = [];
        const edm = [];

        tracks.forEach(track => {
            if (track.genre === 'Rap') {
                rap.push(track)
            } else if (track.genre === 'R&B') {
                rnb.push(track)
            } else if (track.genre === 'Pop') {
                pop.push(track)
            } else if (track.genre === 'Latin') {
                latin.push(track)
            } else if (track.genre === 'EDM') {
                edm.push(track)
            }
        })
        
        return (
            <div className='discover-main'>
                <div className="discover-co-main">
                    <div className='discover-tracks-container'>


                        <div className="track-genre">
                            <div className="genre-header">R&B</div>
                            <div className="genre-subheader">The latest and hottest R&B tracks</div>
                            <ul className="track-list">
                                {
                                    rnb.map(track => (
                                        <div key={track.id}>
                                            <li className="track-obj">
                                                <Link to={`/tracks/${track.id}`}>
                                                    <img className="cover-img" src={track.imageUrl} />
                                                </Link>
                                                <div className="play-btn">
                                                    <PlayButtonContainer trackId={track.id} track={track} />
                                                </div>
                                                <Link to={`/tracks/${track.id}`} className="track-title">{track.title}</Link>
                                                <h5 className='track-artist-under-title'>{track.artist}</h5>
                                                {/* <Link to={`/users/${track.uploader_id}`} className="discover-track-uploader">Uploaded by</Link> */}
                                            </li>
                                        </div>
                                    ))
                                }
                            </ul>
                        </div>


                        <div className="track-genre">
                            <div className="genre-header">Pop</div>
                            <div className="genre-subheader">The latest and hottest Pop tracks</div>
                            <ul className="track-list">
                                {
                                    pop.map(track => (
                                        <div key={track.id}>
                                            <li className="track-obj">
                                                <div className="play-btn">
                                                    <PlayButtonContainer trackId={track.id} track={track} />
                                                </div>
                                                <Link to={`/tracks/${track.id}`}>
                                                    <img className="cover-img" src={track.imageUrl} />
                                                </Link>
                                                <Link to={`/tracks/${track.id}`} className="track-title">{track.title}</Link>
                                                <h5 className='track-artist-under-title'>{track.artist}</h5>
                                                {/* <Link to={`/users/${track.uploader_id}`} className="discover-track-uploader">Uploaded by</Link> */}
                                            </li>
                                        </div>
                                    ))
                                }
                            </ul>
                        </div>


                        <div className="track-genre">
                            <div className="genre-header">Rap</div>
                            <div className="genre-subheader">The latest and hottest Rap tracks</div>
                            <ul className="track-list">
                                {
                                    rap.map(track => (
                                        <div key={track.id}>
                                            <li className="track-obj">
                                                <div className="play-btn">
                                                    <PlayButtonContainer trackId={track.id} track={track} />
                                                </div>
                                                <Link to={`/tracks/${track.id}`}>
                                                    <img className="cover-img" src={track.imageUrl} />
                                                </Link>
                                                <Link to={`/tracks/${track.id}`} className="track-title">{track.title}</Link>
                                                <h5 className='track-artist-under-title'>{track.artist}</h5>
                                                {/* <Link to={`/users/${track.uploader_id}`} className="discover-track-uploader">Uploaded by</Link> */}
                                            </li>
                                        </div>
                                    ))
                                }
                            </ul>
                        </div>


                        <div className="track-genre">
                            <div className="genre-header">Latin</div>
                            <div className="genre-subheader">The latest and hottest Latin tracks</div>
                            <ul className="track-list">
                                {
                                    latin.map(track => (
                                        <div key={track.id}>
                                            <li className="track-obj">
                                                <div className="play-btn">
                                                    <PlayButtonContainer trackId={track.id} track={track} />
                                                </div>
                                                <Link to={`/tracks/${track.id}`}>
                                                    <img className="cover-img" src={track.imageUrl} />
                                                </Link>
                                                <Link to={`/tracks/${track.id}`} className="track-title">{track.title}</Link>
                                                <h5 className='track-artist-under-title'>{track.artist}</h5>
                                                {/* <Link to={`/users/${track.uploader_id}`} className="discover-track-uploader">Uploaded by</Link> */}
                                            </li>
                                        </div>
                                    ))
                                }
                            </ul>
                        </div>


                        <div className="track-genre">
                            <div className="genre-header">EDM</div>
                            <div className="genre-subheader">The latest and hottest EDM tracks</div>
                            <ul className="track-list">
                                {
                                    edm.map(track => (
                                        <div key={track.id}>
                                            <li className="track-obj">
                                                <div className="play-btn">
                                                    <PlayButtonContainer trackId={track.id} track={track} />
                                                </div>
                                                <Link to={`/tracks/${track.id}`}>
                                                    <img className="cover-img" src={track.imageUrl} />
                                                </Link>
                                                <Link to={`/tracks/${track.id}`} className="track-title">{track.title}</Link>
                                                <h5 className='track-artist-under-title'>{track.artist}</h5>
                                                {/* <Link to={`/users/${track.uploader_id}`} className="discover-track-uploader">Uploaded by</Link> */}
                                            </li>
                                        </div>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>



                    <div className='discover-right-container'>
                        <div className = "meet-the-creator-discover">Meet the Creator</div>
                        <div className = "links-container">

                            <div className="link-buttons-user">
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

export default Discover;