import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { PokemonDetailScreen } from '../screens/PokemonDetailScreen';
import { PokemonDetails } from '../interfaces/Pokemon';
import { AddPokemonScreen } from '../screens/AddPokemonScreen';

export type RootStackParamList = {
  Home: undefined;
  PokemonDetail: {details : PokemonDetails};
  AddPokemon : undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name='PokemonDetail' component={PokemonDetailScreen}/>
      <Stack.Screen name='AddPokemon' component={AddPokemonScreen}/>
    </Stack.Navigator>
  )
}
