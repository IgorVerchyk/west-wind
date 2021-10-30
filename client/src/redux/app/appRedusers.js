import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import appActions from "./appActions"

const onPushToState = (state, action) => action.payload;

const language = createReducer("Ua",{[appActions.toggleLanguage]: onPushToState,})
const modalItem = createReducer(null, {[appActions.setModalItem]: onPushToState,})
const message = createReducer(null,{[appActions.setMessage]:onPushToState,})
export default combineReducers({
   modalItem,
   language,
   message
    })
   