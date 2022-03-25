import React from "react";
import { Switch } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import NavBarContainer from './navbar/navbar_container'
import SplashContainer from './splash/splash_container'
import DiscoverContainer from './discover/discover_container'
import Modal from './modal/modal'

const App = () => (
  <div>
  <Modal/>
      <ProtectedRoute exact path="/discover" component={NavBarContainer}/>

  <Switch>
      <AuthRoute exact path="/" component={SplashContainer}/>
      {/* <ProtectedRoute exact path="/discover" component={DiscoverContainer}/> */}
  </Switch> 

  </div>
);

export default App;