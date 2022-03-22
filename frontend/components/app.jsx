import React from "react";
import NavBarContainer from './navbar/navbar_container'

const App = () => (
  <div className = 'app'>
    <h1><NavBarContainer/></h1>

      {/* <Modal/>

      <header>
        <NavBarContainer/>
      </header>

      <Switch>
          <AuthRoute exact path="/" component={SplashContainer}/>
          <ProtectedRoute exact path="/discover" component={DiscoverContainer}/>
      </Switch>

      <footer>
        <TrackPlayBarContainer/>
      </footer> */}

  </div>
);

export default App;