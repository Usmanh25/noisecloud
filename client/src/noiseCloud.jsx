import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./actions/components/root"
import { login } from './actions/session_actions';


document.addEventListener("DOMContentLoaded", () => {
  
  let store;

  if (window.currentUser) {
      const preloadedState = {
          entities: {
              users: { [window.currentUser.id]: window.currentUser }
          },
          session: { id: window.currentUser.id }
      };
      store = configureStore(preloadedState);
      delete window.currentUser;
  } else {
      store = configureStore();
  }  
  
  
  const root = document.getElementById("root");
  window.getState = store.getState
  ReactDOM.render(<Root store={store} />, root);
  
  
  window.dispatch = store.dispatch;
  window.login = login;
});
