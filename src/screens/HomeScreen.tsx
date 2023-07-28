import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {PokemonList} from '../components/PokemonList';

export type DataT = {
  name: string;
  url: string;
};

const pokemonsList: DataT[] = [
  {
    name: 'bulbasaur',
    url: 'https://pokeapi.co/api/v2/pokemon/1/',
  },
  {
    name: 'ivysaur',
    url: 'https://pokeapi.co/api/v2/pokemon/2/',
  },
  {
    name: 'venusaur',
    url: 'https://pokeapi.co/api/v2/pokemon/3/',
  },
  {
    name: 'charmander',
    url: 'https://pokeapi.co/api/v2/pokemon/4/',
  },
];

export const HomeScreen = () => {
  return (
    <>
      <SafeAreaView>
        <PokemonList data={pokemonsList} />
      </SafeAreaView>
    </>
  );
};
