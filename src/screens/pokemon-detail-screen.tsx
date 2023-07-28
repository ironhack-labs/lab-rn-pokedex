import {View} from 'react-native';
import React from 'react';

import type {PokemonDetailScreenProps} from '../navigation/app-navigator.types';
import type {PokemonDetails} from '../models';
import {useFetch} from '../hooks';
import {usePokemonCtx} from '../context';
import {PokemonDetail} from '../components';

export const PokemonDetailScreen = ({route}: PokemonDetailScreenProps) => {
  const {
    params: {pokemonId},
  } = route;

  const {setPokemonDetails} = usePokemonCtx();

  const {data: pokemonDetails, loading} = useFetch<PokemonDetails>({
    method: 'get',
    url: `pokemon/${pokemonId}`,
    onSuccess: pokemonDetail => {
      setPokemonDetails(pokemonDetail);
    },
  });

  if (loading) {
    return null;
  }

  return (
    <View>
      <PokemonDetail pokemon={pokemonDetails!} />
    </View>
  );
};
