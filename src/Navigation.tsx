import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ColorSchemeName } from 'react-native';
import CheckInScreen from './screens/CheckInScreen';
import CreateTripScreen from './screens/CreateTripScreen';
import LoginScreen from './screens/LoginScreen';
import MapScreen from './screens/MapScreen';
import ProfileScreen from './screens/ProfileScreen';
import TravelScreen from './screens/TravelScreen';
import { Routes, navigationRef } from './utils/navigation';
import { RootStackParamList } from './utils/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

interface Props {
  colorScheme: ColorSchemeName;
}

export default function Navigation(props: Props) {
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={props.colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name={Routes.TopStack.LoginScreen}
          component={LoginScreen}
        />
        <Stack.Screen name={Routes.TopStack.MapScreen} component={MapScreen} />
        <Stack.Screen
          name={Routes.TopStack.CheckInScreen}
          component={CheckInScreen}
        />
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen
            name={Routes.TopStack.ProfileScreen}
            component={ProfileScreen}
          />
          <Stack.Screen
            name={Routes.TopStack.TravelScreen}
            component={TravelScreen}
          />
          <Stack.Screen
            name={Routes.TopStack.CreateTripScreen}
            component={CreateTripScreen}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
