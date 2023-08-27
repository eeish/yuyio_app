import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Button from '../components/Button';
import Container from '../components/Container';
import { RootStackScreenProps } from '../utils/types';

const CreateTripScreen = ({
  navigation,
}: RootStackScreenProps<'CreateTripScreen'>) => {
  const onPressGenerate = () => {
    navigation.goBack();
  };

  return (
    <Container safeAreaEdges={['top']} style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Generate Trip</Text>
        <TouchableOpacity style={styles.listItem} activeOpacity={0.8}>
          <Text style={styles.listItemLabel}>Moments</Text>
          <Text style={styles.listItemValue}>Emerald Isla</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem} activeOpacity={0.8}>
          <Text style={styles.listItemLabel}>Choose Date</Text>
          <Text style={styles.listItemValue}>08.23-08.26</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem} activeOpacity={0.8}>
          <Text style={styles.listItemLabel}>Choose Type</Text>
          <Text style={styles.listItemValue}>vacation,photography</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem} activeOpacity={0.8}>
          <Text style={styles.listItemLabel}>Choose Budget</Text>
          <Text style={styles.listItemValue}>$900</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem} activeOpacity={0.8}>
          <Text style={styles.listItemLabel}>Add Must-see Places</Text>
          <Text style={styles.listItemValue}>
            Lanai Riverside, Discovery Parks - Mackay, Vella's Xpress Fish Bar
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.buttonWrapper}>
        <Button onPress={onPressGenerate} text={'Generate Trip'} />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    margin: 20,
    fontSize: 28,
    fontWeight: 'bold',
  },
  listItem: {
    marginBottom: 12,
    marginHorizontal: 20,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#f8f8f8',
  },
  listItemLabel: {
    color: '#666',
    fontSize: 17,
  },
  listItemValue: {
    fontSize: 22,
    marginTop: 4,
  },
  buttonWrapper: {
    marginTop: 32,
    paddingHorizontal: 16,
  },
});

export default CreateTripScreen;
