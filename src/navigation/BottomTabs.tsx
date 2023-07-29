import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Navigator } from './Navigator';
import { AddPokemonScreen, PokemonSearchScreen } from '../screens';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
  return (
    <Tab.Navigator
    sceneContainerStyle={{
      backgroundColor: 'white'
    }}
    screenOptions={{
      tabBarActiveTintColor: 'gray',
      tabBarLabelStyle: {
        marginBottom: (Platform.OS === 'ios') ? 0 : 10
      },
      tabBarStyle: {
        position: 'absolute',
        backgroundColor: 'rgba(255,255,255, 0.90)',
        borderWidth: 0,
        elevation: 0,
        height: 60
      }
    }}
    >
      <Tab.Screen
       name="Home"
       component={Navigator}
       options={{
        tabBarLabel: "List",
        tabBarIcon: ({color}) => <Icon color={color} size={20} name="list-outline"/>
       }}
       />
      <Tab.Screen
      options={{
        tabBarLabel: "Search",
        tabBarIcon: ({color}) => <Icon color={color} size={20} name="search-outline"/>
       }}
       name="PokemonSearch" 
       component={PokemonSearchScreen}
       />
       <Tab.Screen
      options={{
        tabBarLabel: "Add Pokemon",
        tabBarIcon: ({color}) => <Icon color={color} size={20} name="add-circle-outline"/>
       }}
       name="AddPokemon" 
       component={AddPokemonScreen}
       />
    </Tab.Navigator>
  )
}