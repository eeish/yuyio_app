import {
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import { Edge, useSafeAreaInsets } from 'react-native-safe-area-context';

interface ContainerProps extends ViewProps {
  backgroundSource?: ImageSourcePropType;
  blurRadius?: number;
  style?: ViewStyle;
  safeAreaEdges?: Edge[];
}

export default function Container(props: ContainerProps) {
  const {
    backgroundSource = require('../assets/images/splash.jpg'),
    blurRadius,
    style,
    safeAreaEdges = [],
    children,
  } = props;
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundSource}
        blurRadius={blurRadius}
        style={styles.background}>
        <View
          style={[
            styles.background,
            safeAreaEdges.includes('top') && { paddingTop: insets.top },
            safeAreaEdges.includes('bottom') && {
              paddingBottom: insets.bottom,
            },
            safeAreaEdges.includes('left') && { paddingLeft: insets.left },
            safeAreaEdges.includes('right') && { paddingRight: insets.right },
            style,
          ]}>
          {children}
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  background: {
    width: '100%',
    height: '100%',
  },
});
