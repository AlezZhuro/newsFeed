import React from 'react';

import {Providers} from './providers';
import {Routing} from './routes';
import 'react-native-gesture-handler';

function App(): JSX.Element {
  return (
    <Providers>
      <Routing />
    </Providers>
  );
}

export default App;
