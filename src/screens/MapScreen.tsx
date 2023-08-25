import { useWalletConnectModal } from '@walletconnect/modal-react-native';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import Container from '../components/Container';
import { RootStackScreenProps } from '../utils/types';

const MapScreen = ({ navigation }: RootStackScreenProps<'MapScreen'>) => {
  const { provider } = useWalletConnectModal();

  return (
    <Container style={styles.container}>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
  },
});

export default MapScreen;
