
import React, { useEffect } from "react";
import PlayButtonContainer from "../play_button/play_button_container";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
const API_BASE_URL = "";
const Discover = ({ fetchTracks, tracks }) => {
  useEffect(() => {
    fetchTracks();
  }, []);

  const updateArrowVisibility = (genre) => {
    const list = document.getElementById(`track-list-${genre}`);
    if (!list) return;

    const container = list.parentElement;
    const leftArrow = container.querySelector(".scroll-arrow.left");

    if (list.scrollLeft > 5) {
      leftArrow.classList.remove("hidden");
    } else {
      leftArrow.classList.add("hidden");
    }
  };

  const scrollList = (genre, direction) => {
    const list = document.getElementById(`track-list-${genre}`);
    if (!list) return;

    const track = list.querySelector('.track-obj');
    if (!track) return;

    const style = window.getComputedStyle(track);
    const trackWidth = track.offsetWidth +
      parseInt(style.marginRight || 0);

    const scrollAmount = trackWidth * 5;

    const initialScroll = list.scrollLeft;

    list.scrollBy({
      left: direction * scrollAmount,
      behavior: "smooth",
    });

    let frames = 0;
    const checkScroll = () => {
      frames++;
      if (list.scrollLeft !== initialScroll || frames > 10) {
        updateArrowVisibility(genre);
      } else {
        requestAnimationFrame(checkScroll);
      }
    };

    requestAnimationFrame(checkScroll);
  };

  useEffect(() => {
    const blockers = document.querySelectorAll(".track-list, .scroll-overlay");

    const preventScroll = (e) => {
      e.preventDefault();
      return false;
    };

    blockers.forEach(el => {
      el.addEventListener("wheel", preventScroll, { passive: false });
      el.addEventListener("touchmove", preventScroll, { passive: false });
    });

    const trackLists = document.querySelectorAll(".track-list");
    trackLists.forEach((list) => {
      const genre = list.id.replace("track-list-", "");
      const onScroll = () => updateArrowVisibility(genre);
      list.addEventListener("scroll", onScroll);
      updateArrowVisibility(genre); 
    });

    return () => {
      blockers.forEach(el => {
        el.removeEventListener("wheel", preventScroll);
        el.removeEventListener("touchmove", preventScroll);
      });
      trackLists.forEach((list) => {
        const genre = list.id.replace("track-list-", "");
        list.removeEventListener("scroll", () => updateArrowVisibility(genre));
      });
    };
  }, []);

  const genreTracks = {};
  if (tracks) {
    tracks.forEach((track) => {
      if (!genreTracks[track.genre]) {
        genreTracks[track.genre] = [];
      }
      genreTracks[track.genre].push(track);
    });
  }

  const renderGenre = (genre, subheader) => (
    <div className="track-genre" key={genre}>
      <div className="genre-header">Trending by {genre}</div>

      <div className="scroll-container">
        <div className="scroll-overlay" />

        <ul className="track-list" id={`track-list-${genre}`}>
          {genreTracks[genre].map((track) => (
            <li key={track.id} className="track-obj">
              <div className="track-img-wrapper">
                <Link to={`/tracks/${track.id}`}>
                  <img
                    className="cover-img"
                    src={
                      track.imageUrl?.startsWith("/rails")
                        ? `${API_BASE_URL}${track.imageUrl}`
                        : track.imageUrl
                    }
                    alt={track.title}
                  />
                </Link>
                <div className="play-btn">
                  <PlayButtonContainer trackId={track.id} track={track} />
                </div>
              </div>
              <Link to={`/tracks/${track.id}`} className="track-title-a">{track.title}</Link>
              <h5 className='track-artist-under-title'>{track.artist}</h5>
            </li>
          ))}
        </ul>

        <button
          className="scroll-arrow left hidden"
          onClick={() => scrollList(genre, -1)}
          aria-label={`Scroll left in ${genre} tracks`}
        >
          &#8249;
        </button>
        <button
          className="scroll-arrow right"
          onClick={() => scrollList(genre, 1)}
          aria-label={`Scroll right in ${genre} tracks`}
        >
          &#8250;
        </button>
      </div>
    </div>
  );

  return (
    <div className='discover-main'>
      <div className="discover-co-main">
        <div className='discover-tracks-container'>
          {genreTracks["R&B"] && renderGenre("R&B", "Trending R&B tracks")}
          {genreTracks["Rap"] && renderGenre("Rap", "Trending Rap tracks")}
          {genreTracks["Pop"] && renderGenre("Pop", "Trending Pop tracks")}
          {genreTracks["Latin"] && renderGenre("Latin", "Trending Latin tracks")}
          {genreTracks["EDM"] && renderGenre("EDM", "Trending EDM tracks")}
        </div>

        <div className='discover-right-container'>
          <div className="meet-the-creator-discover">Meet the Creator</div>
          <div className="links-container">
            <div className="link-buttons-user">
              <a href="https://github.com/usmanh25" target="_blank" rel="noreferrer">
                <div><FontAwesomeIcon icon={faGithub} className="github" /></div>
              </a>
              <a href="https://www.linkedin.com/in/usman-hameed-5486b11b0/" target="_blank" rel="noreferrer">
                <div><FontAwesomeIcon icon={faLinkedinIn} className="linkedin"/></div>
              </a>
            </div>

            <div>
              <p>Language: English (US)<br></br><br></br>Created using React, Redux, JavaScript, Ruby on Rails, PostgreSQL, Amazon AWS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;