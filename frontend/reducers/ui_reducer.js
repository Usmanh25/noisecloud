import { combineReducers } from 'redux';

import modalReducer from './modal_reducer';
import trackPlaybarReducer from './track_playbar_reducer';

const uiReducer = combineReducers({
    modal: modalReducer,
    trackPlaybar: trackPlaybarReducer
});
  
export default uiReducer;