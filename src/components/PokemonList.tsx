// src/components/PokemonList.tsx
import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import PokemonCard from './PokemonCard';

interface Pokemon {
  name: string;
  url: string;
}

interface Props {
  pokemons: Pokemon[];
  onPokemonPress: (pokemon: Pokemon) => void;
}

const PokemonList: React.FC<Props> = ({ pokemons, onPokemonPress }) => {
  return (
    <FlatList
      data={pokemons}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => <PokemonCard pokemon={item} onPress={onPokemonPress} />}
    />
  );
};

PokemonList.propTypes = {
  pokemons: PropTypes.array.isRequired,
  onPokemonPress: PropTypes.func.isRequired,
};

export default PokemonList;
