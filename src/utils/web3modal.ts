import { IProviderMetadata } from '@walletconnect/modal-react-native';
import { Props } from '@walletconnect/modal-react-native/lib/typescript/src/components/WalletConnectModal';
import { ISessionParams } from '@walletconnect/modal-react-native/lib/typescript/src/types/coreTypes';

export const WC_PROJECT_ID = '93cee003066934486ff6fd09f0e1491a';

const providerMetadata: IProviderMetadata = {
  name: 'Yuyio',
  description: 'Travel the world',
  url: 'https://github.com',
  icons: ['https://i.ibb.co/DtkQvD3/App-icon.png'],
  redirect: {
    native: 'yuyio://',
    universal: '',
  },
};

const sessionParams: ISessionParams = {
  namespaces: {
    eip155: {
      methods: [
        'eth_sendTransaction',
        'eth_signTransaction',
        'eth_sign',
        'personal_sign',
        'eth_signTypedData',
      ],
      chains: ['eip155:137'],
      events: ['chainChanged', 'accountsChanged'],
      rpcMap: {
        137: `https://rpc.walletconnect.com?chainId=eip155:137&projectId=${WC_PROJECT_ID}`,
      },
    },
  },
  optionalNamespaces: {
    eip155: {
      methods: [
        'eth_sendTransaction',
        'eth_signTransaction',
        'eth_sign',
        'personal_sign',
        'eth_signTypedData',
      ],
      chains: ['eip155:80001'],
      events: ['chainChanged', 'accountsChanged'],
      rpcMap: {
        80001: `https://rpc.walletconnect.com?chainId=eip155:80001&projectId=${WC_PROJECT_ID}`,
      },
    },
  },
};

const web3ModalConfig: Props = {
  projectId: WC_PROJECT_ID,
  providerMetadata,
  sessionParams,
};

export default web3ModalConfig;
