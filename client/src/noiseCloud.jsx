import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import { login } from './actions/session_actions';
import './styles/application.scss';
import API_BASE_URL from './util/config';
import $ from 'jquery';  // Make sure jquery is imported here

const renderApp = (store) => {
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
};

document.addEventListener("DOMContentLoaded", async () => {
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
    renderApp(store);
  } else {
    try {
      // Use jQuery ajax here with dynamic API_BASE_URL and withCredentials
      const user = await $.ajax({
        method: "GET",
        url: `${API_BASE_URL}/api/session`,
        xhrFields: { withCredentials: true },
      });

      const preloadedState = {
        entities: {
          users: { [user.id]: user }
        },
        session: { id: user.id }
      };
      store = configureStore(preloadedState);
    } catch (err) {
      console.error("Session fetch failed:", err);
      store = configureStore();
    }

    renderApp(store);
  }

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
});
