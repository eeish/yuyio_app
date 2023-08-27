import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Routes } from './navigation';

export type RootStackParamList = {
  [Routes.TopStack.LoginScreen]: undefined;
  [Routes.TopStack.MapScreen]: undefined;
  [Routes.TopStack.ProfileScreen]: undefined;
  [Routes.TopStack.TravelScreen]: undefined;
  [Routes.TopStack.CreateTripScreen]: undefined;
  [Routes.TopStack.CheckInScreen]: undefined;
  [Routes.TopStack.TravelDetailScreen]: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;
