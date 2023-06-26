import axios from 'axios';
import {config} from 'shared/config';
import {token} from './interceptors';

export const httpClient = axios.create({
  baseURL: config.api.baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});
token(httpClient);

export enum UrlPaths {
  NewsList = '/news',
  SignIn = '/sign_in',
}
