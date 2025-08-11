import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import { receiveCurrentUser, logoutCurrentUser } from './actions/session_actions';
import './styles/application.scss';
import API_BASE_URL from './util/config';
import $ from 'jquery';

const renderApp = (store) => {
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
};

document.addEventListener("DOMContentLoaded", async () => {
  let store;

  // Check localStorage for JWT token
  const token = localStorage.getItem('jwtToken');

  if (token) {
    try {
      // Fetch current user with Authorization header set
      const user = await $.ajax({
        method: "GET",
        url: `${API_BASE_URL}/api/session`,
        headers: { Authorization: `Bearer ${token}` },
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
      localStorage.removeItem('jwtToken');
      store = configureStore();
    }
  } else {
    store = configureStore();
  }

  renderApp(store);

  // Expose these for debugging/testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  // Wrap login and logout to handle token storage/cleanup

  window.login = async (userCredentials) => {
    try {
      const res = await $.ajax({
        method: 'POST',
        url: `${API_BASE_URL}/api/session`,
        data: { user: userCredentials }
      });
      localStorage.setItem('jwtToken', res.token);
      store.dispatch(receiveCurrentUser(res.user));
      return res.user;
    } catch (e) {
      throw e;
    }
  };

  window.logout = () => {
    localStorage.removeItem('jwtToken');
    store.dispatch(logoutCurrentUser());
  };
});
