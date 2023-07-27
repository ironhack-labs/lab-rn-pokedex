import {StackScreenProps, StackNavigationProp} from '@react-navigation/stack';
import type {Pokemon} from '../models';

// NOTE: use separate file with type to avoid circular dependencies
export type RootStackParamList = {
  Home: undefined;
  PokemonDetail: {
    pokemon: Pokemon;
  };
  AddPokemon: undefined;
};

export type NavigationProps = StackNavigationProp<RootStackParamList>;
export type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;
export type PokemonDetailScreenProps = StackScreenProps<
  RootStackParamList,
  'PokemonDetail'
>;
export type AddPokemonScreenProps = StackScreenProps<
  RootStackParamList,
  'AddPokemon'
>;
