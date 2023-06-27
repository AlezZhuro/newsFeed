import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface SignInProps {}

export const SignInScreen: React.FC<SignInProps> = () => {
  return (
    <SafeAreaView>
      <Text>SignIn Screen</Text>
    </SafeAreaView>
  );
};
