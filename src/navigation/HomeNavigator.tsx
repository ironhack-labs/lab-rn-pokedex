import {Button, Text} from 'react-native';
import React from 'react';
import {StackScreenProps, createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {TabNavigatorProps} from './TabNavigator';
import HomeTest from '../screens/HomeScreenTest';
import {HomeScreen} from '../../screens/HomeScreen';
import {DetailsScreen} from '../../screens/DetailsScreen';
import {Pokemon} from '../../hooks/useFetch';

export type HomeNavigatorProps = {
  HOME: undefined;
  POKEMON_DETAILS: {
    item: Pokemon;
  };
  HOMETEST: undefined;
};

const Stack = createStackNavigator<HomeNavigatorProps>();

export default function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HOME" component={HomeScreen} />
      <Stack.Screen name="POKEMON_DETAILS" component={DetailsScreen} />
    </Stack.Navigator>
  );
}
