import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import homeScreen from "../screens/homeScreen";
import pokemonDetailsScreen from "../screens/pokemonDetailsScreen";
import addPokemonScreen from "../screens/addPokemonScreen";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={homeScreen} />
      <Stack.Screen name="PokemonDetail" component={pokemonDetailsScreen} />
    </Stack.Navigator>
  );

const Navigation = () => {
    return (
        <Tab.Navigator screenOptions={{headerShown:false}}>
          <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen name="AddPokemon" component={addPokemonScreen} />
        </Tab.Navigator>
    );
  };

export default Navigation;