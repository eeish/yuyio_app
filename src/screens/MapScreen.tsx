import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Button from '../components/Button';
import Container from '../components/Container';
import { height } from '../utils/layout';
import { Routes } from '../utils/navigation';
import { RootStackScreenProps } from '../utils/types';

const MapScreen = ({ navigation }: RootStackScreenProps<'MapScreen'>) => {
  const onPressChat = () => {
    navigation.navigate(Routes.TopStack.CheckInScreen);
  };

  const onPressAvatar = () => {
    navigation.navigate(Routes.TopStack.ProfileScreen);
  };

  const onPressTravel = () => {
    navigation.navigate(Routes.TopStack.TravelScreen);
  };

  return (
    <Container style={styles.container}>
      <MapView provider={PROVIDER_GOOGLE} style={styles.mapView} />
      <TouchableOpacity
        onPress={onPressChat}
        style={[styles.buttonWrapper, styles.back]}
        activeOpacity={0.85}>
        <Image
          style={styles.icon}
          source={require('../assets/images/chat.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onPressAvatar}
        style={[styles.buttonWrapper, styles.avatar]}
        activeOpacity={0.85}>
        <Image
          style={styles.avatarImage}
          source={require('../assets/images/avatar.png')}
        />
      </TouchableOpacity>
      <View style={styles.bottomButton}>
        <Button fullWidth text={'Go to Travel'} onPress={onPressTravel} />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  mapView: {
    height,
  },
  icon: {
    width: 24,
    height: 24,
  },
  buttonWrapper: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
    backgroundColor: '#f8f8f8',
  },
  back: {
    position: 'absolute',
    left: 20,
    top: 72,
  },
  avatar: {
    position: 'absolute',
    right: 20,
    top: 72,
    borderWidth: 2,
    borderColor: '#FF7D0D',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
  },
  bottomButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 64,
    paddingHorizontal: 20,
  },
});

export default MapScreen;
