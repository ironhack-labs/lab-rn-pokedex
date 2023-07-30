import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import { PokemonProvider } from './src/context/PokemonContext';
import AppNavigator from './src/navigation/navigation';
import { theme } from './src/styles/Themes';

const Stack = createStackNavigator();

type RootStackParamList = {
  Home: undefined;
  PokemonDetail: {pokemonName: string};
  AddPokemon: undefined;
};

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
