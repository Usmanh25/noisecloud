import React from "react";
import { Switch, Route } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import NavBarContainer from './navbar/navbar_container'
import SplashContainer from './splash/splash_container'
import DiscoverContainer from './discover/discover_container'
import UploadContainer from './upload/upload_container'
import Modal from './modal/modal'
import TrackShowContainer from "./tracks/track_show_container";
import UserShowContainer from "./user/user_show_container";
import TrackPlaybarContainer from './track_playbar/track_playbar_container'
const App = () => (
  <div>
  <Modal/>
      <ProtectedRoute path="/" component={NavBarContainer}/>
      <ProtectedRoute path="/" component={TrackPlaybarContainer}/>
  <Switch>
      <AuthRoute exact path="/" component={SplashContainer}/>
      <ProtectedRoute exact path="/discover" component={DiscoverContainer}/>
      <ProtectedRoute exact path="/upload" component={UploadContainer}/>
      <ProtectedRoute exact path="/tracks/:trackId" component={TrackShowContainer} />
      <ProtectedRoute exact path="/users/:userId" component={UserShowContainer} />
  </Switch> 

  </div>
);

export default App;