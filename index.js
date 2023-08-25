import 'react-native-get-random-values';
import '@walletconnect/react-native-compat';
import { AppRegistry } from 'react-native';
import '@ethersproject/shims';
import App from './App';
import './shim';
import { expo } from './app.json';

AppRegistry.registerComponent(expo.name, () => App);
