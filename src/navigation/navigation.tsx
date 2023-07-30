import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import addPokemonScreen from '../screens/AddPokemonScreen';
import homeScreen from '../screens/HomeScreen';
import pokemonDetailsScreen from '../screens/PokemonDetailsScreen';
import SearchPokemonScreen from '../screens/SearchPokemonScreen';
import {Pokemon} from '../types/types';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {Image} from 'react-native';
import {theme} from '../styles/Themes';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export type RootStackParamList = {
  Home: {init: boolean};
  PokemonDetail: {pokemonName: string; detail?: Pokemon};
};

type HomeScreenRouteProps = RouteProp<RootStackParamList, 'Home'>;

const HomeStack = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const route = useRoute<HomeScreenRouteProps>();

  useEffect(() => {
    if (route.params?.init)
      navigation.reset({
        index: 0,
        routes: [{name: 'Home'}],
      });
  }, [route.params?.init]);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={homeScreen} />
      <Stack.Screen name="PokemonDetail" component={pokemonDetailsScreen} />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: tab => {
            return (
              <Image
                source={require('../../img/icon-pokeball.png')}
                width={15}
                tintColor={
                  tab.focused ? theme.colors.primary : theme.colors.text
                }
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Buscar Pokemon"
        component={SearchPokemonScreen}
        options={{
          tabBarIcon: tab => {
            return (
              <Image
                source={require('../../img/icon-pokeball.png')}
                width={15}
                tintColor={
                  tab.focused ? theme.colors.primary : theme.colors.text
                }
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Agregar Pokemon"
        component={addPokemonScreen}
        options={{
          tabBarIcon: tab => {
            return (
              <Image
                source={require('../../img/icon-pokeball.png')}
                width={15}
                tintColor={
                  tab.focused ? theme.colors.primary : theme.colors.text
                }
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigation;
