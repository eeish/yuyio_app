/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { enableLatestRenderer } from 'react-native-maps';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './src/Navigation';

enableLatestRenderer();

const App = () => {
  return (
    <SafeAreaProvider>
      <Navigation colorScheme="light" />
    </SafeAreaProvider>
  );
};

export default App;
