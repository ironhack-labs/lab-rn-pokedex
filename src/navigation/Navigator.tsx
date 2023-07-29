import React from 'react'

import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, PokemonDetailScreen, AddPokemonScreen, PokemonSearchScreen} from '../screens';
import type {RootStackParamList} from './app-navigator.types';

const Stack = createStackNavigator<RootStackParamList>();

export const Navigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: 'white'
      }
    }} initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="PokemonSearch" component={PokemonSearchScreen} />
      <Stack.Screen name="AddPokemon" component={AddPokemonScreen} />
      <Stack.Screen name="PokemonDetail" component={PokemonDetailScreen} />
    </Stack.Navigator>
  )
};