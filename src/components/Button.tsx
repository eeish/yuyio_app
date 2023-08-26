import { ReactNode, useRef } from 'react';
import {
  ActivityIndicator,
  Animated,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import layout from '../utils/layout';

interface ButtonProps {
  text: string;
  prefix?: ReactNode;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  variant?: 'gradient' | 'outline';
  onPress?: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  touchableStyle?: ViewStyle;
  trackingExtraProperties?: Record<string, any>;
}

export default function Button({
  text,
  loading,
  prefix,
  disabled,
  fullWidth = true,
  onPress,
  style,
  textStyle,
  touchableStyle,
}: ButtonProps) {
  const springValue = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(springValue, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const handleRelease = () => {
    Animated.spring(springValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const content = loading ? (
    <ActivityIndicator color="white" />
  ) : (
    <View style={styles.content}>
      {prefix}
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </View>
  );

  const containerStyle = [
    styles.container,
    disabled && styles.disabledButton,
    fullWidth && styles.fullWidth,
    style,
  ];

  return (
    <TouchableOpacity
      disabled={disabled || loading}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handleRelease}
      activeOpacity={0.85}
      style={[
        fullWidth ? styles.fullWidth : styles.wrappedWidth,
        touchableStyle,
      ]}>
      <Animated.View style={{ transform: [{ scaleX: springValue }] }}>
        <View style={[!fullWidth && styles.wrappedContainer, containerStyle]}>
          {content}
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 54,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF7D0D',
    ...(layout.isSmallDevice && {
      height: 44,
    }),
  },
  fullWidth: {
    width: '100%',
  },
  wrappedWidth: {
    flexWrap: 'wrap',
  },
  wrappedContainer: {
    paddingHorizontal: 24,
  },
  disabledButton: {
    backgroundColor: '#DFE1E5',
  },
  disabledText: {
    color: '#6B748D',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
