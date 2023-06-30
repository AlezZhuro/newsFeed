import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {RootStackParamList, Screens, navigationRef} from 'shared/routes';
import {HomeScreen, SignInScreen, NewsScreen} from 'screens';
import {AppHeader} from 'widgets';

const RootStack = createStackNavigator<RootStackParamList>();

export const Routing = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator
        initialRouteName={Screens.HOME}
        screenOptions={{
          header: props => <AppHeader title={props.options.title} {...props} />,
          cardStyle: {backgroundColor: '#ffffff'},
          headerBackTitleVisible: false,
        }}>
        <RootStack.Screen
          name={Screens.HOME}
          component={HomeScreen}
          options={{
            headerShown: true,
            gestureEnabled: true,
          }}
        />
        <RootStack.Screen
          name={Screens.NEWS_ITEM}
          component={NewsScreen}
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
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
