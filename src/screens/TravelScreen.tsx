import { useWalletConnectModal } from '@walletconnect/modal-react-native';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Container from '../components/Container';
import { height } from '../utils/layout';
import { Routes } from '../utils/navigation';
import { RootStackScreenProps } from '../utils/types';
import { getShortAddress } from '../utils/utils';

const TravelScreen = ({ navigation }: RootStackScreenProps<'TravelScreen'>) => {
  const { address } = useWalletConnectModal();

  const onPressCreateTrip = () => {
    navigation.navigate(Routes.TopStack.CreateTripScreen);
  };

  const onPressTravelDetail = () => {
    navigation.navigate(Routes.TopStack.TravelDetailScreen);
  };

  return (
    <Container style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={[styles.buttonWrapper]} activeOpacity={0.85}>
          <Text>Options</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPressCreateTrip}
          style={[styles.buttonWrapper, styles.createTrip]}
          activeOpacity={0.85}>
          <Text>Create my trip</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.scrollViewContainer}>
        <ScrollView style={styles.scrollView}>
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.8}
            onPress={onPressTravelDetail}>
            <View style={styles.travelInfo}>
              <View style={styles.avatar}>
                <Image
                  style={styles.avatarImage}
                  source={require('../assets/images/avatar.png')}
                />
              </View>
              <View>
                <Text style={styles.title}>Winter in Portugal</Text>
                <View style={styles.tripInfo}>
                  <Text style={styles.label}>
                    @{getShortAddress(address ?? '')}
                  </Text>
                  <Text style={styles.label}>08.25-08.26</Text>
                </View>
              </View>
            </View>
            <Image
              style={styles.cover}
              source={require('../assets/images/travel.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.8}
            onPress={onPressTravelDetail}>
            <View style={styles.travelInfo}>
              <View style={styles.avatar}>
                <Image
                  style={styles.avatarImage}
                  source={require('../assets/images/avatar.png')}
                />
              </View>
              <View>
                <Text style={styles.title}>Winter in Portugal</Text>
                <View style={styles.tripInfo}>
                  <Text style={styles.label}>
                    @{getShortAddress(address ?? '')}
                  </Text>
                  <Text style={styles.label}>08.25-08.26</Text>
                </View>
              </View>
            </View>
            <Image
              style={styles.cover}
              source={require('../assets/images/travel.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.8}
            onPress={onPressTravelDetail}>
            <View style={styles.travelInfo}>
              <View style={styles.avatar}>
                <Image
                  style={styles.avatarImage}
                  source={require('../assets/images/avatar.png')}
                />
              </View>
              <View>
                <Text style={styles.title}>Winter in Portugal</Text>
                <View style={styles.tripInfo}>
                  <Text style={styles.label}>
                    @{getShortAddress(address ?? '')}
                  </Text>
                  <Text style={styles.label}>08.25-08.26</Text>
                </View>
              </View>
            </View>
            <Image
              style={styles.cover}
              source={require('../assets/images/travel.png')}
            />
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  header: {
    marginTop: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonWrapper: {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
    backgroundColor: '#f8f8f8',
  },
  createTrip: {
    backgroundColor: '#FF7D0D',
  },
  scrollViewContainer: {
    marginTop: 20,
    height: height - 199,
  },
  scrollView: {
    paddingHorizontal: 20,
  },
  card: {
    marginBottom: 16,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#f8f8f8',
  },
  travelInfo: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22,
    backgroundColor: '#f8f8f8',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    borderRadius: 22,
  },
  tripInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginTop: 12,
  },
  title: {
    fontSize: 22,
  },
  label: {
    fontSize: 16,
    color: '#aaa',
  },
  cover: {
    width: '100%',
    height: 180,
  },
});

export default TravelScreen;
