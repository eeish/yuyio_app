import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Button from '../components/Button';
import Container from '../components/Container';
import { height } from '../utils/layout';
import { RootStackScreenProps } from '../utils/types';

const CheckInScreen = ({
  navigation,
}: RootStackScreenProps<'CheckInScreen'>) => {
  const onPressBack = () => {
    navigation.goBack();
  };

  const onPressCheckIn = () => {};

  return (
    <Container style={styles.container}>
      <MapView provider={PROVIDER_GOOGLE} style={styles.mapView} />
      <TouchableOpacity
        onPress={onPressBack}
        style={[styles.buttonWrapper, styles.back]}
        activeOpacity={0.85}>
        <Image
          style={styles.icon}
          source={require('../assets/images/back.png')}
        />
      </TouchableOpacity>
      <View style={styles.bottom}>
        <Text style={styles.location}>857-913 S Park Terrace</Text>
        <Button fullWidth text={'Check In'} onPress={onPressCheckIn} />
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
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 64,
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 20,
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  location: {
    fontSize: 22,
    marginBottom: 20,
  },
});

export default CheckInScreen;
