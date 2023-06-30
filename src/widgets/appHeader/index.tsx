import React from 'react';
import {Appbar} from 'react-native-paper';
import {StackHeaderProps} from '@react-navigation/stack';

import {authModel} from 'entities';
import {useAppDispatch} from 'shared';

type Props = {
  title?: string;
};

export const AppHeader: React.FC<Props & StackHeaderProps> = React.memo(
  ({navigation, title}) => {
    const dispatch = useAppDispatch();

    const goBack = () => navigation.goBack();

    const handleLogout = () => {
      dispatch(authModel.logout());
    };

    return (
      <Appbar.Header>
        {navigation.canGoBack() && <Appbar.BackAction onPress={goBack} />}
        <Appbar.Content title={title ?? ''} />
        <Appbar.Action color="red" icon="logout" onPress={handleLogout} />
      </Appbar.Header>
    );
  },
);
