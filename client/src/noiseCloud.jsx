// import React from "react";
// import ReactDOM from "react-dom";
// import configureStore from "./store/store";
// import Root from "./components/root"
// import { login } from './actions/session_actions';
// import './styles/application.scss'; // adjust path as needed


// const renderApp = (store) => {
//   const root = document.getElementById("root");
//   ReactDOM.render(<Root store={store} />, root);
// };

// document.addEventListener("DOMContentLoaded", async () => {
  
//   let store;

//   if (window.currentUser) {
//       const preloadedState = {
//           entities: {
//               users: { [window.currentUser.id]: window.currentUser }
//           },
//           session: { id: window.currentUser.id }
//       };
//       store = configureStore(preloadedState);
//       delete window.currentUser;
//     renderApp(store);
//   } else {
//       store = configureStore();
//   }  
  
  
//   const root = document.getElementById("root");
//   window.getState = store.getState
//   ReactDOM.render(<Root store={store} />, root);
  
  
//   window.dispatch = store.dispatch;
//   window.login = login;
// });


import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root"
import { login } from './actions/session_actions';
import './styles/application.scss';

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
      const res = await fetch("https://songcloud-e382.onrender.com/api/session", {
        credentials: "include",
      });

      if (res.ok) {
        const user = await res.json();
        const preloadedState = {
          entities: {
            users: { [user.id]: user }
          },
          session: { id: user.id }
        };
        store = configureStore(preloadedState);
      } else {
        store = configureStore();
      }
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
