import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import AddPokemonScreen from '../screens/AddPokemonScreen';
import PokemonDetailsScreen from '../screens/PokemonDetailsScreen';
import TabBarIcon from '../components/TabBarIcon';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({color, size}) => (
            <TabBarIcon color={color} size={size} icon="home" />
          ),
        }}
      />
      <Tab.Screen
        name="PokemonDetail"
        component={AddPokemonScreen}
        options={{
          tabBarLabel: 'Detalles',
          tabBarIcon: ({color, size}) => (
            <TabBarIcon color={color} size={size} icon="search" />
          ),
        }}
      />
      <Tab.Screen
        name="Agregar"
        component={PokemonDetailsScreen}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({color, size}) => (
            <TabBarIcon color={color} size={size} icon="user" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigation;
