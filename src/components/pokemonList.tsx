import React from 'react';
import { FlatList } from 'react-native';
import styles from '../styles/Home.Styles';
import { Pokemon } from '../types/types';
import PokemonCard from './PokemonCard';

type PokemonListProps = {
  pokemons: Pokemon[];
  own?: boolean;
};

const PokemonList = ({pokemons, own}: PokemonListProps) => {
  return (
    <FlatList
      data={pokemons}
      renderItem={({item}) => <PokemonCard own={own} pokemon={item} />}
      keyExtractor={item => String(item.id)}
      style={styles.listContainer}
    />
  );
};

export default PokemonList;
