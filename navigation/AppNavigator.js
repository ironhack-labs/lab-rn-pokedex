import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import PokemonDetailScreen from './screens/PokemonDetailScreen';
import AddPokemonScreen from './screens/AddPokemonScreen';
import {PokemonProvider} from './context/PokemonContext';

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
    <PokemonProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen name="AddPokemon" component={AddPokemonScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </PokemonProvider>
  );
};

export default AppNavigator;
