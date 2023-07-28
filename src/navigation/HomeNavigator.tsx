import { Button, Text } from 'react-native';
import React from 'react';
import { StackScreenProps, createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { TabNavigatorProps } from './TabNavigator';

export type HomeNavigatorProps = {
    HOME: undefined;
    POKEMON_DETAILS: {id: string};
};

const Stack = createStackNavigator<HomeNavigatorProps>();

export default function HomeNavigator() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='HOME' component={() => <Text>HOME</Text>}/>
        <Stack.Screen name='POKEMON_DETAILS' component={() => <Text>Pokemon details</Text>}/>
    </Stack.Navigator>
  )
  }