import React from 'react';
import {PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {store} from '../store';

export const Providers: React.FC<React.PropsWithChildren> = ({children}) => {
  return (
    <>
      <Provider store={store}>
        <PaperProvider>
          <SafeAreaProvider>{children}</SafeAreaProvider>
        </PaperProvider>
      </Provider>
    </>
  );
};
