import { useWalletConnectModal } from '@walletconnect/modal-react-native';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Container from '../components/Container';
import { Routes } from '../utils/navigation';
import { RootStackScreenProps } from '../utils/types';
import { getShortAddress } from '../utils/utils';

const ProfileScreen = ({
  navigation,
}: RootStackScreenProps<'ProfileScreen'>) => {
  const { address, provider } = useWalletConnectModal();

  const onPressLogout = async () => {
    if (provider) {
      await provider.disconnect();
      navigation.reset({
        index: 0,
        routes: [{ name: Routes.TopStack.LoginScreen }],
      });
    }
  };

  return (
    <Container safeAreaEdges={['top']} style={styles.container}>
      <ScrollView>
        <View style={styles.profileInfo}>
          <View style={styles.avatar}>
            <Image
              style={styles.avatarImage}
              source={require('../assets/images/avatar.png')}
            />
          </View>
          <View>
            <Text style={styles.address}>{getShortAddress(address ?? '')}</Text>
            <View style={styles.socialInfo}>
              <Text style={styles.label}>43 Friends</Text>
              <Text style={styles.label}>12 Followers</Text>
            </View>
          </View>
        </View>
        <View style={styles.walletInfo}>
          <TouchableOpacity style={styles.infoItem} activeOpacity={0.8}>
            <Image
              style={styles.icon}
              source={require('../assets/images/wallet.png')}
            />
            <Text style={styles.listItemText}>Wallet</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.infoItem} activeOpacity={0.8}>
            <Image
              style={styles.icon}
              source={require('../assets/images/shield.png')}
            />
            <Text style={styles.listItemText}>Privilege</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.tripLabel}>My World Trip</Text>
        <View style={styles.mapViewWrapper}>
          <MapView provider={PROVIDER_GOOGLE} style={styles.mapView} />
        </View>
        <TouchableOpacity style={styles.listItem} activeOpacity={0.8}>
          <Text style={styles.listItemText}>Moments</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem} activeOpacity={0.8}>
          <Text style={styles.listItemText}>Personal Information</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem} activeOpacity={0.8}>
          <Text style={styles.listItemText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem} activeOpacity={0.8}>
          <Text style={styles.listItemText}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.listItem}
          activeOpacity={0.8}
          onPress={onPressLogout}>
          <Text style={styles.listItemText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    padding: 16,
    borderRadius: 16,
    backgroundColor: '#f8f8f8',
  },
  avatar: {
    width: 80,
    height: 80,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22,
    borderWidth: 2,
    borderColor: '#FF7D0D',
    backgroundColor: '#f8f8f8',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    borderRadius: 22,
  },
  socialInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginTop: 12,
  },
  address: {
    fontSize: 22,
  },
  label: {
    fontSize: 16,
    color: '#aaa',
  },
  walletInfo: {
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  infoItem: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#f8f8f8',
  },
  icon: {
    width: 24,
    height: 24,
  },
  tripLabel: {
    marginTop: 20,
    marginHorizontal: 20,
    marginBottom: 8,
    fontSize: 18,
  },
  mapViewWrapper: {
    marginBottom: 20,
    marginHorizontal: 20,
    borderRadius: 12,
    overflow: 'hidden',
  },
  mapView: {
    height: 88,
  },
  listItem: {
    marginBottom: 12,
    marginHorizontal: 20,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#f8f8f8',
  },
  listItemText: {
    color: '#666',
    fontSize: 17,
  },
});

export default ProfileScreen;
