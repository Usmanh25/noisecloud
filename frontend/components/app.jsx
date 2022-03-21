import React from "react";

const App = () => (
  <div className = 'app'>
      <Modal/>

      <NavBarContainer/>

      <Switch>
          <AuthRoute exact path="/" component={SplashContainer}/>
          <ProtectedRoute exact path="/discover" component={DiscoverContainer}/>
      </Switch>

      <TrackPlayBarContainer/>
  </div>
);

export default App;