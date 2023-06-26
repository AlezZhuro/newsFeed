import React from 'react';
import {Text, View} from 'react-native';
import tw from 'twrnc';

import {ScreenProps, Screens} from 'shared/routes';
import {config} from 'shared/config';

interface HomeScreenProps {}

export const HomeScreen: React.FC<
  HomeScreenProps & ScreenProps<Screens.HOME>
> = () => {
  console.log({api: config.api});
  
  return (
    <View style={tw`flex-1`}>
      <Text>HomeScreen</Text>
      <Text>Make api call to: {config.api.baseURL}</Text>
    </View>
  );
};
