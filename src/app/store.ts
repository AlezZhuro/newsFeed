import {configureStore} from '@reduxjs/toolkit';
import {authReducer, newsReducer} from 'entities';

export const store = configureStore({
  reducer: {
    news: newsReducer,
    auth: authReducer,
  },
});
