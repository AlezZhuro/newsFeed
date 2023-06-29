import {StackScreenProps, StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  [Screens.HOME]: undefined;
  [Screens.SIGN_IN]: undefined;
};

export type ScreenProps<Screen extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, Screen>;

export type NavProp<Screen extends keyof RootStackParamList> =
  StackNavigationProp<RootStackParamList, Screen>;

export enum Screens {
  HOME = 'Home',
  SIGN_IN = 'SignIn',
}
