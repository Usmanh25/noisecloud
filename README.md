# noisecloud

[noisecloud Live](https://noisecloud.herokuapp.com/#/)

NoiseCloud is a fullstack clone of the popular music-streaming platform SoundCloud, where users can stream music and upload their own content to the site

<img src="app/assets/images/SoundCloudLogo.png"></img>

# Technologies Used
* Backend
  * PostgreSQL
  * Ruby on Rails
* Frontend
  * React.js
  * Redux
  * Amazon AWS

# Features
## Continuous Audio Play

Logged in users can chose to have a single track looped continuously, as well as view the length and duration of any track while listening. They can navigate throughout the site without the current music track being interrupted. By rendering the TrackPlaybar component in a protected route and by persisting the current track playing in a state nested under the ui state, this is

```javascript
//frontend/components/app.jsx
<ProtectedRoute path="/" component={TrackPlaybarContainer}/>
```
```javascript
// frontend/components/track_playbar/track_playbar_container.jsx
const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    currentTrack: state.ui.trackPlaybar.currentTrack,
    isPlaying: state.ui.trackPlaybar.isPlaying,
});

const mDTP = dispatch => ({
    receivePlayTrack: track => dispatch(receivePlayTrack(track)),
    removePlayTrack: () => dispatch(removePlayTrack()), 
    playTrack: () => dispatch(playTrack()),
    pauseTrack: () => dispatch(pauseTrack())
});

```
## Uploading Tracks

Users can upload their own tracks to the site. 

<img src="app/assets/images/SoundCloudLogo.png"></img>

## Creating Comments

Users can leave comments for any track, and will have ability to delete their own comments.

<img src="app/assets/images/SoundCloudLogo.png"></img>

## Future Features
* Followers 
* Likes
* Playlists
