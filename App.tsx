import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {PokemonProvider} from './src/context/PokemonContext';
import HomeScreen from './src/screens/HomeScreen';
import PokemonDetailScreen from './src/screens/PokemonDetailScreen';
import AddPokemonScreen from './src/screens/AddPokemonScreen';

const Stack = createStackNavigator();

type RootStackParamList = {
  Home: undefined;
  PokemonDetail: {pokemonName: string}; // Define los parámetros necesarios para PokemonDetailScreen
  AddPokemon: undefined;
};

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <PokemonProvider>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen
              name="PokemonDetail"
              component={PokemonDetailScreen}
            />
            <Stack.Screen name="AddPokemon" component={AddPokemonScreen} />
          </Stack.Navigator>
        </PokemonProvider>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
