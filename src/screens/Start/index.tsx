import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {authModel} from 'entities';
import {config, useAppDispatch, ScreenProps, Screens} from 'shared';

interface StartScreenProps {}

export const StartScreen: React.FC<
  StartScreenProps & ScreenProps<Screens.START>
> = ({navigation}) => {
  const dispatch = useAppDispatch();

  const init = async () => {
    const authHeaders = await AsyncStorage.getItem(
      config.asyncStorage.headersKey,
    );
    if (authHeaders === null) {
      navigation.replace(Screens.SIGN_IN);
      return;
    }

    const {meta} = await dispatch(authModel.refreshUser());

    if (meta.requestStatus === 'fulfilled') {
      navigation.replace(Screens.HOME);
    }
  };

  useEffect(() => {
    init();
  }, []);

  return null;
};
