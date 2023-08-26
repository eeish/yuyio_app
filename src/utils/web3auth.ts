import Web3Auth, {
  OPENLOGIN_NETWORK,
  WhiteLabelData,
} from '@web3auth/react-native-sdk';
import * as storage from 'expo-secure-store';
import * as webBrowser from 'expo-web-browser';

export const WEB3AUTH_CLIENT_ID =
  'BLnYrwNLJ03ZJBCCY3EqNGcp-b2Zm57ErhRWQGEnvbN5vIBM9ckWqSt0YatHI7EO5OSV2NVedFN4sDj4l4ahMMI';

const web3auth = new Web3Auth(webBrowser, storage, {
  clientId: process.env.WEB3AUTH_CLIENT_ID || WEB3AUTH_CLIENT_ID,
  network: OPENLOGIN_NETWORK.TESTNET,
  whiteLabel: {
    name: 'Yuyio',
    logoLight: 'https://i.ibb.co/DtkQvD3/App-icon.png',
    logoDark: 'https://i.ibb.co/DtkQvD3/App-icon.png',
  } as WhiteLabelData,
});

export default web3auth;
