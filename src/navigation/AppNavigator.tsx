import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {RootStackParamList} from '../context/types/Types';
import HomeScreen from '../screens/HomeScreen';
import AddPokemonScreen from '../screens/AddPokemonScreen';
import PokemonDetailScreen from '../screens/PokemonDetailScreen';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AddPokemon" component={AddPokemonScreen} />
      <Stack.Screen name="PokemonDetail" component={PokemonDetailScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
