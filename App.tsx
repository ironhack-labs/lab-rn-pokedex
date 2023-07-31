import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import { PokemonProvider } from './src/context/PokemonContextt';
import AppNavigator from './src/navigation/Navigationn';
import { theme } from './src/styles/Themess';

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
