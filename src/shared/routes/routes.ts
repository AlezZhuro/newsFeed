import {StackScreenProps, StackNavigationProp} from '@react-navigation/stack';
import {NewsListItem} from 'entities';

export type RootStackParamList = {
  [Screens.HOME]: undefined;
  [Screens.START]: undefined;
  [Screens.SIGN_IN]: undefined;
  [Screens.NEWS_ITEM]: NewsListItem;
};

export type ScreenProps<Screen extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, Screen>;

export type NavProp<Screen extends keyof RootStackParamList> =
  StackNavigationProp<RootStackParamList, Screen>;

export enum Screens {
  HOME = 'Home',
  SIGN_IN = 'SignIn',
  NEWS_ITEM = 'NewsItem',
  START = 'Start',
}
