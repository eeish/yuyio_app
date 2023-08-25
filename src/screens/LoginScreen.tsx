import {
  WalletConnectModal,
  useWalletConnectModal,
} from '@walletconnect/modal-react-native';
import { useCallback, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import Container from '../components/Container';
import { Routes } from '../utils/navigation';
import { RootStackScreenProps } from '../utils/types';
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

  return (
    <Container source={require('../assets/images/splash.jpg')}>
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome!</Text>
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          style={styles.walletButton}
          onPress={onPressConnect}
          text={'Connect Wallet'}
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
    paddingHorizontal: 16,
  },
  walletButton: {
    position: 'absolute',
    bottom: 64,
  },
});

export default LoginScreen;
