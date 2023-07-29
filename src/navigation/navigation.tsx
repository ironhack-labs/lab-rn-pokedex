import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import homeScreen from '../screens/homeScreen';
import pokemonDetailsScreen from '../screens/pokemonDetailsScreen';
import addPokemonScreen from '../screens/addPokemonScreen';
import buscadorScreen from '../screens/buscadorScreen';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export type RootStackParamList = {
  PokemonDetail: { pokemonName: string, };
};

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={homeScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="PokemonDetail"
      component={pokemonDetailsScreen}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

const Navigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{headerShown: false}}
      />
      <Tab.Screen 
      name="Buscar Pokemon" 
      component={buscadorScreen} 
      options={{headerShown: false}}
      />

      <Tab.Screen
        name="Agregar Pokemon"
        component={addPokemonScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default Navigation;
