import React from 'react';
import {Text, View} from 'react-native';
import tw from 'twrnc';

import {ScreenProps, Screens} from 'shared/routes';

import {NewsList} from 'widgets';

interface HomeScreenProps {}

export const HomeScreen: React.FC<
  HomeScreenProps & ScreenProps<Screens.HOME>
> = () => {
  return (
    <View style={tw`flex-1`}>
      <Text>HomeScreen</Text>
      <NewsList />
    </View>
  );
};
