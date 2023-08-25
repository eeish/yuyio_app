import Constants, { AppOwnership } from 'expo-constants';
import * as Linking from 'expo-linking';

export const LOGIN_REDIRECT_URL =
  Constants.appOwnership === AppOwnership.Expo ||
  Constants.appOwnership === AppOwnership.Guest
    ? Linking.createURL('web3auth', {})
    : Linking.createURL('web3auth', { scheme: 'io.github.chachaxw' }); // TODO: replace scheme in production env
