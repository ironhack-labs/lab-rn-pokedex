
import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {PokemonProvider} from './src/context/pokemonContext';
import HomeScreen from './src/screens/HomeScreen';
// import PokemonDetailScreen from './src/screens/PokemonDetailScreen';
import AddPokemonScreen from './src/screens/addPokemonScreen';
import AppNavigator from './src/navigation/navigation';

const Stack = createStackNavigator();

type RootStackParamList = {
  Home: undefined;
  PokemonDetail: {pokemonName: string}; 
  AddPokemon: undefined;
};

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <PokemonProvider>
         <AppNavigator/>
        </PokemonProvider>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;