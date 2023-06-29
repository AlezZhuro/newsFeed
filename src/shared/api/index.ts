import {AxiosRequestConfig} from 'axios';
import {ApiResponse, create} from 'apisauce';

import {config} from 'shared/config';
import {
  failedAuthMiddleware,
  setAuthHeaders,
  successAuthMiddleware,
} from './lib';

export const httpClient = create({
  baseURL: config.api.baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

httpClient.addAsyncRequestTransform(async (response: AxiosRequestConfig) => {
  await setAuthHeaders(response);
});

httpClient.addAsyncResponseTransform(async (response: ApiResponse<any>) => {
  failedAuthMiddleware(response);
  await successAuthMiddleware(response);
});

export enum UrlPaths {
  NewsList = '/news',
  SignIn = '/auth/sign_in',
}
