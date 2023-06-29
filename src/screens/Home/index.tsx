import React from 'react';
import {Text, View} from 'react-native';
import tw from 'twrnc';

import {ScreenProps, Screens} from 'shared/routes';

import {NewsList} from 'widgets';
import {SafeAreaView} from 'react-native-safe-area-context';

interface HomeScreenProps {}

export const HomeScreen: React.FC<
  HomeScreenProps & ScreenProps<Screens.HOME>
> = () => {
  return (
    <SafeAreaView
      edges={['bottom', 'left', 'right']}
      style={tw`flex-1 px-16px`}>
      <NewsList />
    </SafeAreaView>
  );
};
