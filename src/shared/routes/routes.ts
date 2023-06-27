import type {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  SignIn: undefined;
  Main: undefined;
  Auth: undefined;
};

export type ScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type NavProp<Screen extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, Screen>;

export enum Screens {
  AUTH_STACK = 'Auth',
  MAIN_STACK = 'Main',
  HOME = 'Home',
  SIGN_IN = 'SignIn',
}
