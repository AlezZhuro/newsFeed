import AsyncStorage from '@react-native-async-storage/async-storage';
import {ApiErrorResponse} from 'apisauce';
import {AxiosError} from 'axios';
import {Alert} from 'react-native';

import {config} from 'shared/config';
import {customNavigatior, Screens} from 'shared/routes';

const redirectToSignScreen = async () => {
  await AsyncStorage.removeItem(config.asyncStorage.headersKey);
  customNavigatior.reset([{name: Screens.SIGN_IN}]);
};

const showAlertWithError = (error: any) => {
  if (error) {
    Alert.alert('Oooops...', `Some error: ${error.message}`);
  }
};

export {redirectToSignScreen, showAlertWithError};
