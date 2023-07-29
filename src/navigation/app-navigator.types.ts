import {StackScreenProps, StackNavigationProp} from '@react-navigation/stack';
import {
  BottomTabScreenProps,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';

import type {Pokemon} from '../models';

// NOTE: use separate file with type to avoid circular dependencies
export type RootStackParamList = {
  Home: undefined;
  PokemonDetail: {
    pokemon: Pokemon;
  };
};

export type RootBottomTabsParamList = {
  HomeTab: undefined;
  PokemonSearch: undefined;
  AddPokemon: undefined;
};

export type NavigationProps = StackNavigationProp<RootStackParamList>;
export type TabNavigationProps =
  BottomTabNavigationProp<RootBottomTabsParamList>;

export type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;
export type PokemonDetailScreenProps = StackScreenProps<
  RootStackParamList,
  'PokemonDetail'
>;
export type PokemonSearchScreenProps = BottomTabScreenProps<
  RootBottomTabsParamList,
  'PokemonSearch'
>;
export type AddPokemonScreenProps = BottomTabScreenProps<
  RootBottomTabsParamList,
  'AddPokemon'
>;
export type PokemonSearchProps = BottomTabScreenProps<
  RootBottomTabsParamList,
  'PokemonSearch'
>;
