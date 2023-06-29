import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import tw from 'twrnc';

import {SignIn} from 'widgets';

interface SignInProps {}

export const SignInScreen: React.FC<SignInProps> = () => {
  return (
    <SafeAreaView style={tw`flex-1 flex-col p-16px`}>
      <SignIn />
    </SafeAreaView>
  );
};
