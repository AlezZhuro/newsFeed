import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {MainStackRouting} from './mainStack';

export const Routing = () => {
  return (
    <NavigationContainer>
      <MainStackRouting />
    </NavigationContainer>
  );
};
