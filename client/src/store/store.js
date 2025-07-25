import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "../reducers/root_reducer";

// const configureStore = (preloadedState = {}) => {
//   return createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger));
// }

const configureStore = (preloadedState = {}) => {
  const store = createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger));

  // // ✅ Expose to window only in development
  // if (process.env.NODE_ENV !== 'production') {
  //   window.store = store;
  // }

  return store;
};

export default configureStore;

