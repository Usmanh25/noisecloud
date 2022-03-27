import React from "react";
import { Switch } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import NavBarContainer from './navbar/navbar_container'
import SplashContainer from './splash/splash_container'
import DiscoverContainer from './discover/discover_container'
import UploadContainer from './upload/upload_container'
import Modal from './modal/modal'

const App = () => (
  <div>
  <Modal/>
      <ProtectedRoute path="/" component={NavBarContainer}/>

  <Switch>
      <AuthRoute exact path="/" component={SplashContainer}/>
      {/* <AuthRoute exact path="/" component={TrackPlaybarContainer}/> */}
      <ProtectedRoute path="/discover" component={DiscoverContainer}/>
      <ProtectedRoute path="/upload" component={UploadContainer}/>
  </Switch> 

  </div>
);

export default App;