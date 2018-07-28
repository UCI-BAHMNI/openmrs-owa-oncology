import {SET_CURRENT_SESSION_SUCCESS } from '../constants';
import initialState from './initialState';

export default (state = initialState.defaultSession, action) => {
  switch (action.type) {
    case SET_CURRENT_SESSION_SUCCESS:
      return {
        ...state,
        currentUser: action.currentSession.user ? action.currentSession.user.display : '',
        currentLocation: action.currentSession.sessionLocation,
        currentProvider: action.currentSession.currentProvider,
      };
    default: return state;
  }
};
