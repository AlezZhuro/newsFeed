import {PreloadedState, configureStore} from '@reduxjs/toolkit';
import {authReducer, newsReducer} from 'entities';

const middlewares: any[] = [];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

export const store = configureStore({
  reducer: {
    news: newsReducer,
    auth: authReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(...middlewares),
});

//for test
export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: {
      news: newsReducer,
      auth: authReducer,
    },
    preloadedState,
  });
};

export type AppStore = ReturnType<typeof setupStore>;
