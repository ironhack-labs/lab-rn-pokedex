/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Navigation from './src/navigation/Navigation';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}

export default App;
