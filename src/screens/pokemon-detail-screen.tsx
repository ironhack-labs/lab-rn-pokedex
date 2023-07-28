import {View, Text} from 'react-native';
import React from 'react';
import type {PokemonDetailScreenProps} from '../navigation/app-navigator.types';

export const PokemonDetailScreen = ({route}: PokemonDetailScreenProps) => {
  const {
    params: {pokemonId},
  } = route;

  return (
    <View>
      <Text>Pokemon Detail screen</Text>
      <Text>{pokemonId}</Text>
    </View>
  );
};
