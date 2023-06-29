import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {RootStackParamList, Screens} from 'shared/routes';
import {HomeScreen, SignInScreen} from 'screens';

const RootStack = createStackNavigator<RootStackParamList>();

export const Routing = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName={Screens.SIGN_IN}>
        <RootStack.Screen
          name={Screens.HOME}
          component={HomeScreen}
          options={{
            headerShown: true,
            gestureEnabled: true,
          }}
        />
        <RootStack.Screen
          name={Screens.SIGN_IN}
          component={SignInScreen}
          options={{
            headerShown: false,
            animationTypeForReplace: 'pop',
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
