import React from 'react';
import {Animated} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {RootStackParamList, Screens, navigationRef} from 'shared/routes';
import {HomeScreen, SignInScreen, NewsScreen, StartScreen} from 'screens';
import {AppHeader} from 'widgets';

const RootStack = createStackNavigator<RootStackParamList>();

const forFade = ({
  current,
}: {
  current: {progress: Animated.AnimatedInterpolation<number>};
}) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

export const Routing = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator
        initialRouteName={Screens.START}
        screenOptions={{
          header: props => <AppHeader title={props.options.title} {...props} />,
          cardStyle: {backgroundColor: '#ffffff'},
          headerBackTitleVisible: false,
        }}>
        <RootStack.Screen
          name={Screens.START}
          component={StartScreen}
          options={{
            headerShown: false,
            cardStyleInterpolator: forFade,
          }}
        />
        <RootStack.Screen
          name={Screens.HOME}
          component={HomeScreen}
          options={{
            headerShown: true,
            gestureEnabled: true,
            cardStyleInterpolator: forFade,
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
            cardShadowEnabled: false,
            cardStyleInterpolator: forFade,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
