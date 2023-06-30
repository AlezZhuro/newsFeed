import AsyncStorage from '@react-native-async-storage/async-storage';

import {config} from 'shared/config';
import {customNavigatior, Screens} from 'shared/routes';

const redirectToSignScreen = async () => {
  await AsyncStorage.removeItem(config.asyncStorage.headersKey);
  customNavigatior.reset([{name: Screens.SIGN_IN}]);
};

export {redirectToSignScreen};
