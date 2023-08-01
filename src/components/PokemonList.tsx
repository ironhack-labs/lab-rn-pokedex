import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { Pokemon } from '../context/types/Pokemon';
import PokemonCard from './PokemonCard';

interface Props {
  pokemons: Pokemon[];
}
const PokemonList: React.FC<Props> = ({ pokemons }) => {
  console.log('pokemons in PokemonList:', pokemons);
  const renderItem = ({ item }: ListRenderItemInfo<Pokemon>) => {
    return <PokemonCard pokemon={item} />;
  };

  return (
    <FlatList
      data={pokemons}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      numColumns={2}
      contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
    />
  );
};

export default PokemonList;
