import React from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { HomeNavigatorProps } from './HomeNavigator';
import AddPokemonScreen from '../screens/AddPokemonScreen';
import {HomeScreen} from '../../screens/HomeScreen';

export type TabNavigatorProps = {
  TAB_HOME: HomeNavigatorProps;
  TAB_SEARCH: undefined;
  TAB_ADD_POKEMON: undefined;
};

const Tab = createBottomTabNavigator<TabNavigatorProps>();

export default function TabNavigator() { 
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="TAB_HOME"
        options={{headerShown: false, tabBarIcon: () => <Text>1</Text>}}
        component={HomeScreen}
      />
      <Tab.Screen
        name="TAB_SEARCH"
        options={{tabBarIcon: () => <Text>2</Text>}}
        component={() => <Text>Tab search</Text>}
      />
      <Tab.Screen
        name="TAB_ADD_POKEMON"
        options={{tabBarIcon: () => <Text>3</Text>}}
        component={AddPokemonScreen}
      />
    </Tab.Navigator>
  );
}
