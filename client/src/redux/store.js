import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import  clubReducers  from './club/clubRedusers';
import appReducers from "./app/appRedusers";
import authReducers from './auth/authRedusers';

const authPersistConfig = {
  key: 'user',
  storage,
};

const clubPersistConfig = {
  key:"content",
  storage,
  blacklist: ["auth"]
  
}
const langPersistConfig = {
  key:"app",
  storage,
}

export const store = configureStore({
  reducer: {
    app: persistReducer(langPersistConfig, appReducers),
    data: persistReducer( clubPersistConfig, clubReducers),
    auth: persistReducer(authPersistConfig, authReducers),
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);