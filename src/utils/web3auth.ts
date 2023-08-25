import Web3Auth, { OPENLOGIN_NETWORK } from '@web3auth/react-native-sdk';
import * as storage from 'expo-secure-store';
import * as webBrowser from 'expo-web-browser';

const web3auth = new Web3Auth(webBrowser, storage, {
  clientId: process.env.WEB3AUTH_CLIENT_ID,
  network: OPENLOGIN_NETWORK.TESTNET,
  whiteLabel: {
    name: 'Yuyio',
    logoLight: 'https://i.ibb.co/DtkQvD3/App-icon.png',
    logoDark: 'https://i.ibb.co/DtkQvD3/App-icon.png',
  },
});

export default web3auth;
