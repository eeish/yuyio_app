import { useWalletConnectModal } from '@walletconnect/modal-react-native';
import { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import Container from '../components/Container';

const LoginScreen = () => {
  const { provider, isConnected, open } = useWalletConnectModal();

  const onPressConnect = useCallback(async () => {
    if (isConnected) {
      await provider?.disconnect();
    } else {
      await open();
    }
  }, [isConnected, open, provider]);

  return (
    <Container>
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
