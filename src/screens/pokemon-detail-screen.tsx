import {View, Text} from 'react-native';
import React, {FC} from 'react';
import type {PokemonDetailScreenProps} from '../navigation/app-navigator.types';

export const PokemonDetailScreen: FC<PokemonDetailScreenProps> = () => {
  return (
    <View>
      <Text>Pokemon Detail screen</Text>
    </View>
  );
};
