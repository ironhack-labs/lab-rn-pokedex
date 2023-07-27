import {StackScreenProps, StackNavigationProp} from '@react-navigation/stack';

// NOTE: use separate file with type to avoid circular dependencies
export type RootStackParamList = {
  Home: undefined;
  PokemonDetail: undefined;
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
