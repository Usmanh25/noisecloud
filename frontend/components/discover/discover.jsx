import React, { useEffect } from "react";
import PlayButtonContainer from "../play_button/play_button_container";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faAngellist } from '@fortawesome/free-brands-svg-icons';

const Discover = ({ fetchTracks, tracks }) => {
  useEffect(() => {
    fetchTracks();
  }, []);

  const genreTracks = {};

  if (tracks) {
    tracks.forEach((track) => {
      if (!genreTracks[track.genre]) {
        genreTracks[track.genre] = [];
      };
      genreTracks[track.genre].push(track);
    });
  };

  const renderGenre = (genre, subheader) => (
    <div className="track-genre">
      <div className="genre-header">{genre}</div>
      <div className="genre-subheader">{subheader}</div>
      <ul className="track-list">
        {genreTracks[genre].map((track) => (
          <li key={track.id} className="track-obj">
            <div className="play-btn">
              <PlayButtonContainer trackId={track.id} track={track} />
            </div>
            <Link to={`/tracks/${track.id}`}>
              <img className="cover-img" src={track.imageUrl} />
            </Link>
            <Link to={`/tracks/${track.id}`} className="track-title">{track.title}</Link>
            <h5 className='track-artist-under-title'>{track.artist}</h5>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className='discover-main'>
      <div className="discover-co-main">
        <div className='discover-tracks-container'>
          {genreTracks && renderGenre("R&B", "The latest and hottest R&B tracks")}
          {genreTracks && renderGenre("Pop", "The latest and hottest Pop tracks")}
          {genreTracks && renderGenre("Rap", "The latest and hottest Rap tracks")}
          {genreTracks && renderGenre("Latin", "The latest and hottest Latin tracks")}
          {genreTracks && renderGenre("EDM", "The latest and hottest EDM tracks")}
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
  );
};

export default Discover;