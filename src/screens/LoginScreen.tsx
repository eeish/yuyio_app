import {
  WalletConnectModal,
  useWalletConnectModal,
} from '@walletconnect/modal-react-native';
import { ethers } from 'ethers';
import { useCallback, useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import Container from '../components/Container';
import { LOGIN_REDIRECT_URL } from '../utils/constants';
import { Routes } from '../utils/navigation';
import { RootStackScreenProps } from '../utils/types';
import web3auth from '../utils/web3auth';
import web3ModalConfig from '../utils/web3modal';

const LoginScreen = ({ navigation }: RootStackScreenProps<'LoginScreen'>) => {
  const { provider, isConnected, open } = useWalletConnectModal();

  useEffect(() => {
    if (isConnected) {
      navigation.navigate(Routes.TopStack.MapScreen);
    }
  }, [isConnected]);

  const onPressConnect = useCallback(async () => {
    if (isConnected) {
      await provider?.disconnect();
    } else {
      await open();
    }
  }, [isConnected, open, provider]);

  const onPressGoogleLogin = async () => {
    try {
      await web3auth.init();
      await web3auth.login({
        loginProvider: 'google',
        redirectUrl: LOGIN_REDIRECT_URL,
        mfaLevel: 'none',
        curve: 'secp256k1',
      });

      if (!web3auth.privKey) {
        throw new Error('No private key retrieved from web3auth');
      }

      const wallet = new ethers.Wallet(web3auth.privKey);
      const address = await wallet.getAddress();
      const userInfo = web3auth.userInfo();

      console.log('address', address);
      console.log('userInfo', userInfo);

      navigation.navigate(Routes.TopStack.MapScreen);
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <Container source={require('../assets/images/splash.jpg')}>
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome!</Text>
      </View>
      <View style={styles.buttonWrapper}>
        <Button onPress={onPressConnect} text={'Connect Wallet'} />
        <Button
          textStyle={styles.textStyle}
          style={styles.googleButton}
          onPress={onPressGoogleLogin}
          text={'Login with Google'}
          prefix={
            <Image
              style={styles.googleIcon}
              source={require('../assets/images/google.png')}
            />
          }
        />
      </View>
      <WalletConnectModal {...web3ModalConfig} />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
  },
  welcome: {
    fontSize: 40,
  },
  buttonWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 64,
    paddingHorizontal: 16,
    gap: 24,
  },
  googleButton: {
    backgroundColor: 'white',
  },
  googleIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  textStyle: {
    color: 'black',
  },
});

export default LoginScreen;
