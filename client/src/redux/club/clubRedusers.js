import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import  {clubActions}  from '.';
import authActions  from "../auth/authActions"

const resetErrorMessage = null;

  const onPushToState = (state, action) => action.payload;
  
  const content = createReducer({}, {
    [clubActions.getContentSuccess]: onPushToState,
    [clubActions.addContentSuccess]: onPushToState,
    [clubActions.deleteContentSuccess]: onPushToState,
    [clubActions.updateContentSuccess]: onPushToState,
  });

  const error = createReducer(null,{
    [authActions.loginSuccess]: () => resetErrorMessage,
    [clubActions.getContentSuccess]: () => resetErrorMessage,
    [clubActions.addContentSuccess]: () => resetErrorMessage,
    [clubActions.deleteContentSuccess]: () => resetErrorMessage,
    [authActions.loginError]: onPushToState,
    [clubActions.getContentError]:onPushToState,
    [clubActions.addContentError]:onPushToState,
    [authActions.currentUserError]: onPushToState,
 
  });
  


export default combineReducers({
content,
error,
})