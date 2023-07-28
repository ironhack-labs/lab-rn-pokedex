import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import type {Pokemon} from '../../models';
import {NavigationProps} from '../../navigation/app-navigator.types';
import {pokemonCardStyles} from './pokemon-card.styles';

type PokemonCardProps = {
  pokemon: Pokemon;
};

export const PokemonCard = ({pokemon}: PokemonCardProps) => {
  const {navigate} = useNavigation<NavigationProps>();

  return (
    <TouchableOpacity
      style={pokemonCardStyles.button}
      activeOpacity={0.8}
      onPress={() => navigate('PokemonDetail', {pokemon})}>
      <View style={pokemonCardStyles.card}>
        <Text style={pokemonCardStyles.pokemonName}>{pokemon.name}</Text>
        <Text style={pokemonCardStyles.pokemonNumber}>#{pokemon.id}</Text>
        <Image
          source={{uri: pokemon.thumbnail}}
          style={pokemonCardStyles.pokemonImage}
        />
      </View>
    </TouchableOpacity>
  );
};
