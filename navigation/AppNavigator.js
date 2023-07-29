import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import PokemonDetailScreen from '../src/screens/PokemonDetailScreen';
import AddPokemonScreen from '../src/screens/AddPokemonScreen';
import HomeScreen from '../src/screens/HomeScreen';
import PokemonSearchScreen from '../src/screens/PokemonSearchScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="PokemonDetail" component={PokemonDetailScreen} />
  </Stack.Navigator>
);

const AppNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="PokemonSearch" component={PokemonSearchScreen} />
      <Tab.Screen name="AddPokemon" component={AddPokemonScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
