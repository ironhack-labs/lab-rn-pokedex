import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import { PokemonProvider } from './src/context/PokemonContext';
import AppNavigator from './src/navigation/Navigation';
import { theme } from './src/styles/Themes';

const App: React.FC = () => {
  return (
    <NavigationContainer theme={theme}>
      <PokemonProvider>
        <AppNavigator />
      </PokemonProvider>
    </NavigationContainer>
  );
};

export default App;
