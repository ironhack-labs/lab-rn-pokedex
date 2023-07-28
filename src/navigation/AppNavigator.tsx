import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {PokemonProvider} from '../context/PokemonContext';
import HomeScreen from '../screens/HomeScreen';
import PokemonDetailScreen from '../screens/PokemonDetailScreen';
import AddPokemonScreen from '../screens/AddPokemonScreen';
import PokemonSearchScreen from '../screens/PokemonSearchScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home1" component={HomeScreen} />
    <Stack.Screen name="PokemonDetail" component={PokemonDetailScreen} />
    <Stack.Screen name="AddPokemon" component={AddPokemonScreen} />
  </Stack.Navigator>
);

const AppNavigator: React.FC = () => {
  return (
    <PokemonProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{headerShown: false}}>
          <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen name="Search" component={PokemonSearchScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </PokemonProvider>
  );
};

export default AppNavigator;
