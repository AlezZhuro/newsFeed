import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {MainStackRouting} from './mainStack';
import {AuthStackRouting} from './authStack';
import {RootStackParamList, Screens} from 'shared/routes';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const Routing = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName={Screens.AUTH_STACK}>
        <RootStack.Screen
          name={Screens.MAIN_STACK}
          component={MainStackRouting}
        />
        <RootStack.Screen
          name={Screens.AUTH_STACK}
          component={AuthStackRouting}
          options={{
            headerShown: false
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
