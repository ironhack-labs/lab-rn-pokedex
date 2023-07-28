import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AddPokemonScreen,
  HomeScreen,
  PokemonDetailScreen,
} from '../src/screens';

export type RootStackParamList = {
  Home: undefined;
  AddPokemon: undefined;
  PokemonDetail: {};
};

const Stack = createNativeStackNavigator();

function AppNavigator(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PokemonDetail" component={PokemonDetailScreen} />
        <Stack.Screen name="AddPokemon" component={AddPokemonScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
