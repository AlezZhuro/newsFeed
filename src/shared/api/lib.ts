import AsyncStorage from '@react-native-async-storage/async-storage';
import {ApiResponse} from 'apisauce';
import {AxiosRequestConfig} from 'axios';
import Toast from 'react-native-toast-message';

import {config} from 'shared/config';
import {UrlPaths} from '.';
import {AuthHeaders, SignInError} from './types';
import {Screens, customNavigatior} from 'shared/routes';

const successAuthMiddleware = async (response: ApiResponse<any>) => {
  try {
    if (
      response.config?.url?.includes(UrlPaths.SignIn) &&
      response.ok &&
      response.status === 200 &&
      response.headers
    ) {
      const headers: AuthHeaders = {
        'access-token': response.headers['access-token'],
        uid: response.headers['uid'],
        client: response.headers['client'],
      };
      await AsyncStorage.setItem(
        config.asyncStorage.headersKey,
        JSON.stringify(headers),
      );
    }
  } catch (error: any) {
    console.error({setAuthHeadersError: error});
  }
};

const failedAuthMiddleware = (response: ApiResponse<any>) => {
  if (response.status === 401 && response.data) {
    const dataWithErrors = response.data as SignInError;
    Toast.show({
      type: 'customError',
      text1: 'Error',
      text2: dataWithErrors.errors.reduce((acc, e) => {
        acc += `${e}\n`;
        return acc;
      }, ''),
      visibilityTime: 7000,
    });
    failedAuthRedirectMiddleware(response);
  }
};

const failedAuthRedirectMiddleware = async (response: ApiResponse<any>) => {
  if (!response.config?.url?.includes(UrlPaths.SignIn)) {
    await AsyncStorage.removeItem(config.asyncStorage.headersKey);
    customNavigatior.reset([{name: Screens.SIGN_IN}]);
  }
};

const setAuthHeaders = async (response: AxiosRequestConfig) => {
  const headersString = await AsyncStorage.getItem(
    config.asyncStorage.headersKey,
  );
  if (headersString) {
    const headers: AuthHeaders = JSON.parse(headersString);
    response.headers = {...response.headers, ...headers};
  }
};

export {successAuthMiddleware, failedAuthMiddleware, setAuthHeaders};
