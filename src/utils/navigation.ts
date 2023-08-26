import {
  CommonActions,
  createNavigationContainerRef,
} from '@react-navigation/native';
import { RootStackParamList } from './types';

const TopStack = {
  LoginScreen: 'LoginScreen' as const,
  MapScreen: 'MapScreen' as const,
  ProfileScreen: 'ProfileScreen' as const,
};

export const Routes = {
  TopStack,
};

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export const navigate = <RouteName extends keyof RootStackParamList>(
  name: RouteName,
  params?: RootStackParamList[keyof RootStackParamList],
) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(
      name as unknown as never,
      params as unknown as never,
    );
  }
};

export const goBack = () => {
  if (navigationRef.isReady() && navigationRef.canGoBack()) {
    navigationRef.dispatch(CommonActions.goBack());
  }
};

export const getScreenName = () => {
  const screenName = navigationRef.getCurrentRoute()?.name;

  return screenName;
};
