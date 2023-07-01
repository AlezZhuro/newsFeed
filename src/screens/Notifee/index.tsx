import React from 'react';
import {Alert, Button, View} from 'react-native';
import {Card, Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import tw from 'twrnc';

import {authModel} from 'entities';
import {ScreenProps, Screens, customNavigatior, useAppSelector} from 'shared';

interface NotifeeProps {}

export const Notifee: React.FC<NotifeeProps & ScreenProps<Screens.NOTIFEE>> = ({
  route,
}) => {
  const isLogged = useAppSelector(authModel.selectors.isLogged);
  const onPress = () => {
    isLogged
      ? customNavigatior.replace({
          name: Screens.NEWS_ITEM,
          params: {id: route.params?.data.id},
        })
      : Alert.alert('Ooops...', 'You need signin', [
          {
            text: 'Go to sign in',
            onPress: () => customNavigatior.navigate({name: Screens.SIGN_IN}),
          },
        ]);
  };

  return (
    <SafeAreaView
      edges={['bottom', 'left', 'right']}
      style={tw`flex-1 pt-20px px-16px gap-8px`}>
      <Text variant="titleLarge">{route.params?.title}</Text>
      <Text variant="titleMedium">{route.params?.body}</Text>
      <Card.Cover source={{uri: route.params?.data.imgUrl}} />
      <Text variant="bodyMedium">{route.params?.data.info}</Text>

      <View>
        <Button title="Go to read the news!" onPress={onPress} />
      </View>
    </SafeAreaView>
  );
};
