import React from 'react';
import {PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';

import {store} from 'app/store';
import {toastConfig} from 'shared';

export const Providers = gestureHandlerRootHOC(
  ({children}: React.PropsWithChildren) => {
    return (
      <Provider store={store}>
        <PaperProvider>
          <SafeAreaProvider>{children}</SafeAreaProvider>
          <Toast config={toastConfig} />
        </PaperProvider>
      </Provider>
    );
  },
);
