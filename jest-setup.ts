import type {Config} from 'jest';
import '@testing-library/jest-native/extend-expect';

const config: Config = {
  // preset: 'react-native',
  // setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  // setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
  // transformIgnorePatterns: [
  //   'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation|twrnc)',
  // ],
};

export default config;
