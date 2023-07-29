import {View} from 'react-native';
import React from 'react';

import type {PokemonDetailScreenProps} from '../navigation/app-navigator.types';
import {PokemonDetail} from '../components';

export const PokemonDetailScreen = ({route}: PokemonDetailScreenProps) => {
  const {
    params: {pokemon},
  } = route;

  return (
    <View>
      <PokemonDetail pokemon={pokemon!} />
    </View>
  );
};
