import React from 'react';
import ReactGA from 'react-ga';
import Carousel from '../carousel/carousel_container'
// import { button } from '@fortawesome/react-fontawesome'

class Discover extends React.Component {
  constructor(props) {
    super(props)

    this.enableCurrentUser = this.enableCurrentUser.bind(this)
    this.loading = true
    this.trackPage = this.trackPage.bind(this)
  }

  trackPage(page) {
    ReactGA.set({
      page
    });
    ReactGA.pageview(page);
  };

  componentDidMount() {
    window.scrollTo(0, 0)

    const page = this.props.location.pathname;
    this.trackPage(page);
    
    this.props.fetchTracks()
    this.enableCurrentUser()
    let track = {}

    if (window.localStorage.getItem("currentTrack") !== 'undefined') {
      track = JSON.parse(window.localStorage.getItem("currentTrack"))
    } else {
      window.localStorage.setItem("currentTrack", JSON.stringify({}))
    }

    if (track && Object.keys(track).length > 0) {
      if (!this.props.currentTrack.id && window.localStorage.getItem("currentTrack"))
      this.props.refreshTrack(JSON.parse(window.localStorage.getItem("currentTrack")));
    }

    setTimeout(() => {
      this.loading = false
    }, 350)
  }

  enableCurrentUser() {
    let userLink = document.getElementById("nav-currentUser");
    if (userLink) {
      userLink.classList.remove("disable")
    }
  }

  render() {
    return (
      <div className="content-container">
        <div className="content-wrapper">
          <div className="content-playlist-main-wrapper">
            <div className="content-playlist-wrapper">
            {
              this.loading ?
                <button icon="spinner" spin size="3x" className="homepage-spinner" /> 
                  :
                  <ul className="content-playlist-ul">
                    <li className="content-playlist-li">
                      <div className="content-playlist-header-wrapper">
                        <h3 className="content-playlist-header">Rap</h3>
                        <h6 className="content-playlist-header-description">Rap</h6>
                      </div>
                      <Carousel genre={"Rap"} />
                    </li>
                      
                    <li className="content-playlist-li">
                      <div className="content-playlist-header-wrapper">
                        <h3 className="content-playlist-header">RnB</h3>
                        <h6 className="content-playlist-header-description">Rnb</h6>
                      </div>
                      <Carousel genre={"R&B"} />
                    </li>

                    <li className="content-playlist-li">
                      <div className="content-playlist-header-wrapper">
                        <h3 className="content-playlist-header">pop</h3>
                        <h6 className="content-playlist-header-description">pop</h6>
                      </div>
                      <Carousel genre={"Pop"} />
                    </li>

                    <li className="content-playlist-li">
                      <div className="content-playlist-header-wrapper">
                        <h3 className="content-playlist-header">EDM</h3>
                        <h6 className="content-playlist-header-description">EDM</h6>
                      </div>
                      <Carousel genre={"EDM"} />
                    </li>

                    <li className="content-playlist-li">
                      <div className="content-playlist-header-wrapper">
                        <h3 className="content-playlist-header">Latin</h3>
                        <h6 className="content-playlist-header-description">Latin</h6>
                      </div>
                      <Carousel genre={"Latin"} />
                    </li>

                  </ul>
              }
            </div>           
          </div>
        </div>
      </div>
    )
  }
}

export default Discover




























































// import React from 'react'
// import {Link} from 'react-router-dom'
// import PlayButtonContainer from '../play_button/play_button_continer'
// // import { button } from '@fortawesome/react-fontawesome'
// // import { faUserFri from '@fortawesome/free-solid-svg-icons'

// class Discover extends React.Component {

//     componentDidMount() {
//         this.props.fetchTracks()
//     }

//     render() {
//         if (!this.props.tracks) { return null }

//         const { currentUser, tracks, randomUsers } = this.props;

//         const rap = [];
//         const latin = [];
//         const pop = [];
//         const rnb = [];
//         const edm = [];


//         tracks.forEach(track => {
//             if (track.genre === 'Rap') {
//                 rap.push(track)
//             } else if (track.genre === 'Latin') {
//                 latin.push(track)
//             } else if (track.genre === 'Pop') {
//                 pop.push(track)
//             } else if (track.genre === 'R&B') {
//                 rnb.push(track)
//             } else if (track.genre === 'EDM') {
//                 edm.push(track)
//             }
//         })
//         return (
//             <div className="discover-page-container">
//                 <div className="discover-tracks-container">
//                     <div className="tracks-list">
//                         <div className="list-header">Dive back in</div>
//                         <div className="list-subheader">Essential picks from your favorite latin</div>
//                         <ul className="track-obj-list">
//                             {
//                                 latin.map(track => (
//                                     <div key={track.id}>
//                                         <li className="discover-track-obj">
//                                             <Link to={`/tracks/${track.id}`}>
//                                                 <img className="discover-track-cover-img" src={track.coverImage} />
//                                             </Link>
//                                             <div className="discover-play-btn">
//                                                 <PlayButtonContainer trackId={track.id} track={track} />
//                                             </div>
//                                             <Link to={`/tracks/${track.id}`} className="discover-track-title">{track.title}</Link>
//                                             <Link to={`/users/${track.uploader.id}`} className="discover-track-uploader">{track.uploader.username}</Link>
//                                         </li>
//                                     </div>
//                                 ))
//                             }
//                         </ul>
//                     </div>
//                     <div className="tracks-list">
//                         <div className="list-header">In the mood for some rap?</div>
//                         <div className="list-subheader"></div>
//                         <ul className="track-obj-list">
//                             {
//                                 rap.map(track => (
//                                     <div key={track.id}>
//                                         <li className="discover-track-obj">
//                                             <div className="discover-play-btn">
//                                                 <PlayButtonContainer trackId={track.id} track={track} />
//                                             </div>
//                                             <Link to={`/tracks/${track.id}`}>
//                                                 <img className="discover-track-cover-img" src={track.coverImage} />
//                                             </Link>
//                                             <Link to={`/tracks/${track.id}`} className="discover-track-title">{track.title}</Link>
//                                             <Link to={`/users/${track.uploader.id}`} className="discover-track-uploader">{track.uploader.username}</Link>
//                                         </li>
//                                     </div>
//                                 ))
//                             }
//                         </ul>
//                     </div>
//                     <div className="tracks-list">
//                         <div className="list-header">rnb</div>
//                         <div className="list-subheader">There are no alternatives to these rnb hits</div>
//                         <ul className="track-obj-list">
//                             {
//                                 alternative.map(track => (
//                                     <div key={track.id}>
//                                         <li className="discover-track-obj">
//                                             <div className="discover-play-btn">
//                                                 <PlayButtonContainer trackId={track.id} track={track} />
//                                             </div>
//                                             <Link to={`/tracks/${track.id}`}>
//                                                 <img className="discover-track-cover-img" src={track.coverImage} />
//                                             </Link>
//                                             <Link to={`/tracks/${track.id}`} className="discover-track-title">{track.title}</Link>
//                                             <Link to={`/users/${track.uploader.id}`} className="discover-track-uploader">{track.uploader.username}</Link>
//                                         </li>
//                                     </div>
//                                 ))
//                             }
//                         </ul>
//                     </div>
//                     <div className="tracks-list">
//                         <div className="list-header">Pop</div>
//                         <div className="list-subheader">Tracks that are pop right now</div>
//                         <ul className="track-obj-list">
//                             {
//                                 pop.map(track => (
//                                     <div key={track.id}>
//                                         <li className="discover-track-obj">
//                                             <div className="discover-play-btn">
//                                                 <PlayButtonContainer trackId={track.id} track={track} />
//                                             </div>
//                                             <Link to={`/tracks/${track.id}`}>
//                                                 <img className="discover-track-cover-img" src={track.coverImage} />
//                                             </Link>
//                                             <Link to={`/tracks/${track.id}`} className="discover-track-title">{track.title}</Link>
//                                             <Link to={`/users/${track.uploader.id}`} className="discover-track-uploader">{track.uploader.username}</Link>
//                                         </li>
//                                     </div>
//                                 ))
//                             }
//                         </ul>
//                     </div>
//                     <div className="tracks-list">
//                         <div className="list-header">Electronic</div>
//                         <div className="list-subheader">edm</div>
//                         <ul className="track-obj-list">
//                             {
//                                 electronic.map(track => (
//                                     <div key={track.id}>
//                                         <li className="discover-track-obj">
//                                             <div className="discover-play-btn">
//                                                 <PlayButtonContainer trackId={track.id} track={track} />
//                                             </div>
//                                             <Link to={`/tracks/${track.id}`}>
//                                                 <img className="discover-track-cover-img" src={track.coverImage} />
//                                             </Link>
//                                             <Link to={`/tracks/${track.id}`} className="discover-track-title">{track.title}</Link>
//                                             <Link to={`/users/${track.uploader.id}`} className="discover-track-uploader">{track.uploader.username}</Link>
//                                         </li>
//                                     </div>
//                                 ))
//                             }
//                         </ul>
//                     </div>
//                 </div>

//                 {/* <div className="discover-uploaders-container">
//                     <h2 className="discover-uploaders-list-header"><button /> Content uploaders you should check out</h2>
//                     <div>
//                         <ul className="discover-uploaders-list">
//                             { randomUsers.map(user => 
//                                     <li key={user.id}>
//                                             <div className="discover-uploaders-obj">
//                                                 <Link className="discover-link" to={`/users/${user.id}`}><img className="discover-uploaders-pic" src={user.profilePic} /></Link>
//                                                 <div className="discover-uploaders-labels">
//                                                     <div className="discover-uploader-username"><Link className="discover-link" to={`/users/${user.id}`}>{user.username}</Link></div>
//                                                             {
//                                                             user.tracks.length === 1 ? (
//                                                         <Link className="discover-link" to={`/users/${user.id}`}>
//                                                                     <div className="num-tracks">
//                                                                         <button className="discover-numtracks-icon" />&#160;<p>{user.tracks.length}</p>&#160;track uploaded
//                                                                     </div>
//                                                                 </Link>
//                                                             ) : (
//                                                         <Link className="discover-link" to={`/users/${user.id}`}>
//                                                                     <div className="num-tracks">
//                                                                         <button className="discover-numtracks-icon" />&#160;<p>{user.tracks.length}</p>&#160;tracks uploaded
//                                                                     </div>
//                                                                 </Link>
//                                                             )
//                                                         }
//                                                     </div>
//                                             </div>
//                                     </li>
//                                 ) }
//                         </ul>
//                     </div>
//                 </div> */}
//             </div>
//         )
//     }

// }

// export default Discover


























































// import React from 'react'
// import {Link} from 'react-router-dom'
// import PlayButtonContainer from '../play_button/play_button_continer'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUserFriends, faPlay } from '@fortawesome/free-solid-svg-icons'

// class Discover extends React.Component {

//     componentDidMount() {
//         this.props.fetchTracks()
//     }

//     render() {
//         return (
//             <div className="discover-page-container">
//                 <div className="discover-tracks-container">
//                     <div className="tracks-list">
//                         <div className="list-header">Dive back in</div>
//                         <div className="list-subheader">Essential picks from your favorite anime games</div>
//                         <ul className="track-obj-list">
//                             {
//                                 animegames.map(track => (
//                                     <div key={track.id}>
//                                         <li className="discover-track-obj">
//                                             <Link to={`/tracks/${track.id}`}>
//                                                 <img className="discover-track-cover-img" src={track.coverImage} />
//                                             </Link>
//                                             <div className="discover-play-btn">
//                                                 <PlayButtonContainer trackId={track.id} track={track} />
//                                             </div>
//                                             <Link to={`/tracks/${track.id}`} className="discover-track-title">{track.title}</Link>
//                                             <Link to={`/users/${track.uploader.id}`} className="discover-track-uploader">{track.uploader.username}</Link>
//                                         </li>
//                                     </div>
//                                 ))
//                             }
//                         </ul>
//                     </div>
//                     <div className="tracks-list">
//                         <div className="list-header">In the mood for some hip hop?</div>
//                         <div className="list-subheader"></div>
//                         <ul className="track-obj-list">
//                             {
//                                 hiphop.map(track => (
//                                     <div key={track.id}>
//                                         <li className="discover-track-obj">
//                                             <div className="discover-play-btn">
//                                                 <PlayButtonContainer trackId={track.id} track={track} />
//                                             </div>
//                                             <Link to={`/tracks/${track.id}`}>
//                                                 <img className="discover-track-cover-img" src={track.coverImage} />
//                                             </Link>
//                                             <Link to={`/tracks/${track.id}`} className="discover-track-title">{track.title}</Link>
//                                             <Link to={`/users/${track.uploader.id}`} className="discover-track-uploader">{track.uploader.username}</Link>
//                                         </li>
//                                     </div>
//                                 ))
//                             }
//                         </ul>
//                     </div>
//                     <div className="tracks-list">
//                         <div className="list-header">Alternative</div>
//                         <div className="list-subheader">There are no alternatives to these indie hits</div>
//                         <ul className="track-obj-list">
//                             {
//                                 alternative.map(track => (
//                                     <div key={track.id}>
//                                         <li className="discover-track-obj">
//                                             <div className="discover-play-btn">
//                                                 <PlayButtonContainer trackId={track.id} track={track} />
//                                             </div>
//                                             <Link to={`/tracks/${track.id}`}>
//                                                 <img className="discover-track-cover-img" src={track.coverImage} />
//                                             </Link>
//                                             <Link to={`/tracks/${track.id}`} className="discover-track-title">{track.title}</Link>
//                                             <Link to={`/users/${track.uploader.id}`} className="discover-track-uploader">{track.uploader.username}</Link>
//                                         </li>
//                                     </div>
//                                 ))
//                             }
//                         </ul>
//                     </div>
//                     <div className="tracks-list">
//                         <div className="list-header">Pop</div>
//                         <div className="list-subheader">Tracks that are POPPIN right now</div>
//                         <ul className="track-obj-list">
//                             {
//                                 pop.map(track => (
//                                     <div key={track.id}>
//                                         <li className="discover-track-obj">
//                                             <div className="discover-play-btn">
//                                                 <PlayButtonContainer trackId={track.id} track={track} />
//                                             </div>
//                                             <Link to={`/tracks/${track.id}`}>
//                                                 <img className="discover-track-cover-img" src={track.coverImage} />
//                                             </Link>
//                                             <Link to={`/tracks/${track.id}`} className="discover-track-title">{track.title}</Link>
//                                             <Link to={`/users/${track.uploader.id}`} className="discover-track-uploader">{track.uploader.username}</Link>
//                                         </li>
//                                     </div>
//                                 ))
//                             }
//                         </ul>
//                     </div>
//                     <div className="tracks-list">
//                         <div className="list-header">Electronic</div>
//                         <div className="list-subheader">🎧 🎛️ 🎚️</div>
//                         <ul className="track-obj-list">
//                             {
//                                 electronic.map(track => (
//                                     <div key={track.id}>
//                                         <li className="discover-track-obj">
//                                             <div className="discover-play-btn">
//                                                 <PlayButtonContainer trackId={track.id} track={track} />
//                                             </div>
//                                             <Link to={`/tracks/${track.id}`}>
//                                                 <img className="discover-track-cover-img" src={track.coverImage} />
//                                             </Link>
//                                             <Link to={`/tracks/${track.id}`} className="discover-track-title">{track.title}</Link>
//                                             <Link to={`/users/${track.uploader.id}`} className="discover-track-uploader">{track.uploader.username}</Link>
//                                         </li>
//                                     </div>
//                                 ))
//                             }
//                         </ul>
//                     </div>
//                 </div>

//                 <div className="discover-uploaders-container">
//                     <h2 className="discover-uploaders-list-header"><FontAwesomeIcon icon={faUserFriends} /> Content uploaders you should check out</h2>
//                     <div>
//                         <ul className="discover-uploaders-list">
//                             { randomUsers.map(user => 
//                                     <li key={user.id}>
//                                             <div className="discover-uploaders-obj">
//                                                 <Link className="discover-link" to={`/users/${user.id}`}><img className="discover-uploaders-pic" src={user.profilePic} /></Link>
//                                                 <div className="discover-uploaders-labels">
//                                                     <div className="discover-uploader-username"><Link className="discover-link" to={`/users/${user.id}`}>{user.username}</Link></div>
//                                                             {
//                                                             user.tracks.length === 1 ? (
//                                                         <Link className="discover-link" to={`/users/${user.id}`}>
//                                                                     <div className="num-tracks">
//                                                                         <FontAwesomeIcon className="discover-numtracks-icon" icon={faPlay} />&#160;<p>{user.tracks.length}</p>&#160;track uploaded
//                                                                     </div>
//                                                                 </Link>
//                                                             ) : (
//                                                         <Link className="discover-link" to={`/users/${user.id}`}>
//                                                                     <div className="num-tracks">
//                                                                         <FontAwesomeIcon className="discover-numtracks-icon" icon={faPlay} />&#160;<p>{user.tracks.length}</p>&#160;tracks uploaded
//                                                                     </div>
//                                                                 </Link>
//                                                             )
//                                                         }
//                                                     </div>
//                                             </div>
//                                     </li>
//                                 ) }
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         )
//     }

// }

// export default Discover