import React from 'react';

import {Providers} from './providers';
import {Routing} from './routes';
import {useNotification} from 'features';

const App = (): JSX.Element => {
  useNotification();
  return (
    <Providers>
      <Routing />
    </Providers>
  );
};

export default App;
