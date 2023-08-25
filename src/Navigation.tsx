import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ColorSchemeName } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import MapScreen from './screens/MapScreen';
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
