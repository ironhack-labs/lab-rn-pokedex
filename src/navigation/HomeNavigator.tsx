import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/HomeScreen';
import {DetailsScreen} from '../screens/DetailsScreen';
import {Pokemon} from '../hooks/useFetch';

export type HomeNavigatorProps = {
  Inicio: undefined;
  POKEMON_DETAILS: {
    item: Pokemon;
  };
};

const Stack = createStackNavigator<HomeNavigatorProps>();

export default function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inicio" component={HomeScreen} options={{headerShown: false}}/>
      <Stack.Screen name="POKEMON_DETAILS" component={DetailsScreen} />
    </Stack.Navigator>
  );
}
