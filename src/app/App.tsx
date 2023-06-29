import React from 'react';

import {Providers} from './providers';
import {Routing} from './routes';

function App(): JSX.Element {
  return (
    <Providers>
      <Routing />
    </Providers>
  );
}

export default App;
