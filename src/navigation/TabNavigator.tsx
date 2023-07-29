import React from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigator, {HomeNavigatorProps} from './HomeNavigator';
import AddPokemonScreen from '../screens/AddPokemonScreen';
import {HomeScreen} from '../screens/HomeScreen';

export type TabNavigatorProps = {
  Inicio: undefined;
  AddPokemon: undefined;
};

const Tab = createBottomTabNavigator<TabNavigatorProps>();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Inicio"
        options={{headerShown: false, tabBarIcon: () => <Text>1</Text>}}
        component={HomeNavigator}
      />
      <Tab.Screen
        name="AddPokemon"
        options={{tabBarIcon: () => <Text>3</Text>}}
        component={AddPokemonScreen}
      />
    </Tab.Navigator>
  );
}
