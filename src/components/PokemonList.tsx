import React from 'react';
import { FlatList } from 'react-native';
import PokemonCard from './PokemonCard';

//Types
import { Pokemon } from '../types/Types';

interface PokemonListProps {
  data: Pokemon[];
}

const PokemonList: React.FC<PokemonListProps> = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(pokemon) => pokemon.name}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
    />
  );
};

export default PokemonList;
