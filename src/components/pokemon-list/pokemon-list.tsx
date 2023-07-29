import {FlatList, View} from 'react-native';
import React from 'react';
import type {Pokemon} from '../../models';
import {PokemonCard} from '../pokemon-card/pokemon-card';
import {pokemonListStyles} from './pokemon-list.styles';

type PokemonListProps = {
  pokemons: Pokemon[];
};

export const PokemonList = ({pokemons}: PokemonListProps) => (
  <FlatList
    style={pokemonListStyles.container}
    data={pokemons}
    numColumns={2}
    renderItem={({item: pokemon, index}) => (
      <View
        style={[
          pokemonListStyles.itemContainer,
          index % 2 === 0 && pokemonListStyles.columnSeparator,
        ]}>
        <PokemonCard pokemon={pokemon} />
      </View>
    )}
    keyExtractor={item => item.name}
  />
);
