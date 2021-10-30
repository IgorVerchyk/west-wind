import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import  authActions  from './authActions';

const onPushToState = (state, action) => action.payload;

const isLogged = createReducer(null, {
  [authActions.loginSuccess]: onPushToState,
  [authActions.logoutSuccess]: (state, { payload }) => null,
  [authActions.currentUserRejected]: (state, { payload }) => null
});

export default combineReducers({
  isLogged,
});