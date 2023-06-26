import {configureStore} from '@reduxjs/toolkit';
import {newsReducer} from 'entities';

export const store = configureStore({
  reducer: {
    news: newsReducer,
  },
});
