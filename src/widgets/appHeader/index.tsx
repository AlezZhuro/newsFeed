import React from 'react';
import {Appbar, Avatar} from 'react-native-paper';
import {StackHeaderProps} from '@react-navigation/stack';

import {authModel} from 'entities';
import {useAppDispatch, useAppSelector} from 'shared';

type Props = {
  title?: string;
};

export const AppHeader: React.FC<Props & StackHeaderProps> = React.memo(
  ({navigation, title}) => {
    const dispatch = useAppDispatch();
    const user = useAppSelector(authModel.selectors.user);

    const goBack = () => navigation.goBack();

    const handleLogout = () => {
      dispatch(authModel.logout());
    };

    return (
      <Appbar.Header>
        {navigation.canGoBack() && <Appbar.BackAction onPress={goBack} />}
        <Appbar.Content title={title ?? ''} />
        {user && (
          <Avatar.Image size={24} source={{uri: user.avatar_cropped_big_url}} />
        )}
        <Appbar.Action color="red" icon="logout" onPress={handleLogout} />
      </Appbar.Header>
    );
  },
);
