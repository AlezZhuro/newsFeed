import Config from 'react-native-config';

const config = {
  api: {
    baseURL: Config.BASE_URL,
  },
  asyncStorage: {
    headersKey: 'headers'
  }
};

export {config};
