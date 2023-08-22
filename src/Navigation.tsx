import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ColorSchemeName} from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';

export const navigationRef = createNavigationContainerRef();

const Stack = createNativeStackNavigator();

interface Props {
  colorScheme: ColorSchemeName;
}

export default function Navigation(props: Props) {
  return (
    <>
      <NavigationContainer
        theme={props.colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name={'WelcomeScreen'} component={WelcomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
