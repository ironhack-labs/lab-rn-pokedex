/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Navigation from './src/navigation/Navigation';
import { PokeProvider } from './src/context/usePokemon';

function App(): JSX.Element {
  return (
    <PokeProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </PokeProvider>
  );
}

export default App;
