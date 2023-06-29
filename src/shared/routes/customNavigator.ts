import {
  CommonActions,
  NavigationContainerRefWithCurrent,
  StackActions,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {Screens} from '.';

export const navigationRef: NavigationContainerRefWithCurrent<any> =
  createNavigationContainerRef();

function navigate({name, params}: RouteToNavigate) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

function goBack() {
  navigationRef.dispatch(() => CommonActions.goBack());
}

function replace(route: RouteToNavigate) {
  navigationRef.dispatch(StackActions.replace(route?.name, route?.params));
}

function reset(route?: Reset, idx?: number) {
  navigationRef.dispatch(
    CommonActions.reset({
      index: idx || 0,
      routes: route || [],
    }),
  );
}

export const customNavigatior = {
  navigate,
  goBack,
  replace,
  reset,
};

type RouteToNavigate = {
  name: ALL_SCREENS;
  params?: Readonly<object | undefined>;
};

type Reset = Array<RouteToNavigate>;

type ALL_SCREENS = `${Screens}`;
