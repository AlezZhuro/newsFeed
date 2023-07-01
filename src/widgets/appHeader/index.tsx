import React from 'react';
import {Appbar, Avatar, Text} from 'react-native-paper';
import {StackHeaderProps} from '@react-navigation/stack';

import {authModel} from 'entities';
import {Screens, useAppDispatch, useAppSelector} from 'shared';

type Props = {};

export const AppHeader: React.FC<Props & StackHeaderProps> = React.memo(
  ({navigation, route}) => {
    const dispatch = useAppDispatch();
    const user = useAppSelector(authModel.selectors.user);

    const goBack = () => navigation.goBack();

    const handleLogout = () => {
      dispatch(authModel.logout());
    };

    return (
      <Appbar.Header>
        {route.name === Screens.NEWS_ITEM && navigation.canGoBack() && (
          <Appbar.BackAction onPress={goBack} />
        )}

        {user && <Appbar.Content title={user.username} />}
        {user && (
          <Avatar.Image size={24} source={{uri: user.avatar_cropped_big_url}} />
        )}
        <Appbar.Action color="red" icon="logout" onPress={handleLogout} />
      </Appbar.Header>
    );
  },
);
