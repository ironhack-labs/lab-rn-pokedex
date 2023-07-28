import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HomeScreen from '../screens/HomeScreen';
import AddPokemonScreen from '../screens/AddPokemonScreen';
import PokemonDetailsScreen from '../screens/PokemonDetailsScreen';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: () => <Icon name="tachometer" color="#000" size={20} />,
        }}
      />
      <Tab.Screen
        name="PokemonDetail"
        component={AddPokemonScreen}
        options={{
          tabBarLabel: 'Detalles',
          tabBarIcon: () => <Icon name="home" color="#000" size={20} />,
        }}
      />
      <Tab.Screen
        name="Agregar"
        component={PokemonDetailsScreen}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: () => <Icon name="home" color="#000" size={20} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigation;
